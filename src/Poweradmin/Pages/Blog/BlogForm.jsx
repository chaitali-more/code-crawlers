'use client';
// src/Poweradmin/Pages/Blog/BlogForm.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createBlog, updateBlog, getBlogById,
  checkBlogTitleExists, checkBlogBrowserUrlExists,
} from "../../../services/blogService";
import CKEditorComponent from "../../components/CKEditorComponent";

function fmt(dateVal) {
  if (!dateVal) return "";
  if (typeof dateVal === "string" && dateVal.length >= 10) return dateVal.slice(0, 10);
  const d = dateVal instanceof Date ? dateVal : new Date(dateVal);
  if (isNaN(d)) return "";
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function slugify(str) {
  return str.toLowerCase().trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const EMPTY = {
  isVisible: true, imageUrls: [], title: "", pageTitle: "",
  browserUrl: "", metaTags: "", shortDescription: "",
  longDescription: "", blogDate: fmt(new Date()), expiryDate: "",
};

export default function BlogForm() {
  const navigate = useNavigate();
  const { id }   = useParams();
  const isEdit   = Boolean(id);

  const [form, setForm]               = useState(EMPTY);
  const [newImages, setNewImages]     = useState([]);
  const [fieldErrors, setFieldErrors] = useState({});
  const [saving, setSaving]           = useState(false);
  const [fetching, setFetching]       = useState(isEdit);
  const [apiError, setApiError]       = useState(null);

  useEffect(() => {
    if (!isEdit) return;
    let alive = true;
    getBlogById(id)
      .then((b) => {
        if (!alive || !b) return;
        setForm({
          isVisible: b.isVisible ?? true,
          imageUrls: Array.isArray(b.imageUrls) ? b.imageUrls : [],
          title: b.title || "",
          pageTitle: b.pageTitle || "",
          browserUrl: b.browserUrl || "",
          metaTags: b.metaTags || "",
          shortDescription: b.shortDescription || "",
          longDescription: b.longDescription || "",
          blogDate: fmt(b.blogDate),
          expiryDate: fmt(b.expiryDate),
        });
      })
      .catch((e) => { if (alive) setApiError(e.message || "Failed to load blog."); })
      .finally(() => { if (alive) setFetching(false); });
    return () => { alive = false; };
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: type === "checkbox" ? checked : value };
      if (name === "title" && !isEdit) {
        const slug = slugify(value);
        updated.pageTitle  = value;
        updated.browserUrl = slug;
      }
      return updated;
    });
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    setNewImages(files);
    setFieldErrors((prev) => ({ ...prev, images: undefined }));
  };

  const removeImage = (idx) => {
    setForm((prev) => ({
      ...prev,
      imageUrls: prev.imageUrls.filter((_, i) => i !== idx),
    }));
  };

  const validateForm = async () => {
    const errors = {};
    if (!form.title.trim()) errors.title = "Title is required.";
    if (!form.pageTitle.trim()) errors.pageTitle = "Page Title is required.";
    if (!form.browserUrl.trim()) errors.browserUrl = "Browser URL is required.";
    if (!form.shortDescription.trim()) errors.shortDescription = "Short description is required.";
    if (!form.longDescription.trim()) errors.longDescription = "Long description is required.";
    if (!form.blogDate) errors.blogDate = "Blog date is required.";

    if (!errors.title) {
      try {
        const exists = await checkBlogTitleExists(form.title.trim(), isEdit ? id : null);
        if (exists) errors.title = "A blog with this Title already exists.";
      } catch (err) {
        console.warn("Title duplicate check failed:", err);
      }
    }

    if (!errors.browserUrl) {
      try {
        const exists = await checkBlogBrowserUrlExists(form.browserUrl.trim(), isEdit ? id : null);
        if (exists) errors.browserUrl = "A blog with this Browser URL already exists.";
      } catch (err) {
        console.warn("Browser URL duplicate check failed:", err);
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null);

    const valid = await validateForm();
    if (!valid) return;

    setSaving(true);
    try {
      const payload = {
        ...form,
        blogDate: form.blogDate ? `${form.blogDate}T00:00:00` : null,
        expiryDate: form.expiryDate ? `${form.expiryDate}T00:00:00` : null,
      };

      if (isEdit) {
        await updateBlog(id, payload, newImages);
      } else {
        await createBlog(payload, newImages);
      }
      navigate("/poweradmin/blogs");
    } catch (err) {
      setApiError(err.response?.data?.message || err.message || "Failed to save blog post.");
    } finally {
      setSaving(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-24 text-gray-500 font-medium">
        Loading blog details…
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEdit ? "Edit Blog Post" : "Create New Blog Post"}
          </h1>
          <p className="text-sm text-gray-500">
            {isEdit ? "Update your blog details below." : "Fill in the details to publish a new blog post."}
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate("/poweradmin/blogs")}
          className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>

      {apiError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {apiError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Visibility</label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="isVisible"
                checked={form.isVisible}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900">
                {form.isVisible ? "Visible" : "Hidden"}
              </span>
            </label>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Blog post title"
                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-200 ${
                  fieldErrors.title ? "border-red-400" : "border-gray-200"
                }`}
              />
              <FieldError msg={fieldErrors.title} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Page Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pageTitle"
                value={form.pageTitle}
                onChange={handleChange}
                placeholder="SEO page title"
                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-200 ${
                  fieldErrors.pageTitle ? "border-red-400" : "border-gray-200"
                }`}
              />
              <FieldError msg={fieldErrors.pageTitle} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Browser URL <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="browserUrl"
                value={form.browserUrl}
                onChange={handleChange}
                placeholder="my-custom-blog-url"
                className={`w-full px-4 py-2.5 border rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-red-200 ${
                  fieldErrors.browserUrl ? "border-red-400" : "border-gray-200"
                }`}
              />
              <FieldError msg={fieldErrors.browserUrl} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="shortDescription"
                value={form.shortDescription}
                onChange={handleChange}
                rows={3}
                placeholder="Brief summary of the blog"
                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-200 ${
                  fieldErrors.shortDescription ? "border-red-400" : "border-gray-200"
                }`}
              />
              <FieldError msg={fieldErrors.shortDescription} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Long Description <span className="text-red-500">*</span>
              </label>
              <CKEditorComponent
                value={form.longDescription}
                onChange={(content) => setForm(prev => ({ ...prev, longDescription: content }))}
              />
              <FieldError msg={fieldErrors.longDescription} />
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 flex justify-end gap-3 rounded-b-xl">
          <button
            type="button"
            onClick={() => navigate("/poweradmin/blogs")}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50"
          >
            {saving ? "Saving…" : isEdit ? "Update Blog" : "Create Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}

function FieldError({ msg }) {
  if (!msg) return null;
  return <p className="text-xs text-red-500 mt-1">{msg}</p>;
}
