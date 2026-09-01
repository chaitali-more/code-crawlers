'use client';

import NextLink from 'next/link';
import { useRouter, usePathname, useParams as useNextParams, useSearchParams as useNextSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

export function Link({ to, href, children, className, onClick, ...props }) {
  const destination = to || href || '#';
  return (
    <NextLink href={destination} className={className} onClick={onClick} {...props}>
      {children}
    </NextLink>
  );
}

export function NavLink({ to, href, className, children, ...props }) {
  const pathname = usePathname();
  const destination = to || href || '#';
  const isActive = pathname === destination;
  const computedClassName = typeof className === 'function' ? className({ isActive }) : `${className || ''} ${isActive ? 'active' : ''}`;
  return (
    <NextLink href={destination} className={computedClassName} {...props}>
      {children}
    </NextLink>
  );
}

export function useNavigate() {
  const router = useRouter();
  return (to, options) => {
    if (typeof to === 'number') {
      if (to === -1) window.history.back();
      return;
    }
    if (options?.replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  };
}

export function useLocation() {
  const pathname = usePathname();
  const searchParams = useNextSearchParams();
  const search = searchParams ? searchParams.toString() : '';
  return {
    pathname: pathname || '/',
    search: search ? `?${search}` : '',
    hash: typeof window !== 'undefined' ? window.location.hash : '',
    state: null,
  };
}

export function useParams() {
  const params = useNextParams();
  return params || {};
}

export function useSearchParams() {
  const searchParams = useNextSearchParams();
  const router = useRouter();
  const setParams = (newParams) => {
    const params = new URLSearchParams(searchParams ? searchParams.toString() : '');
    Object.entries(newParams).forEach(([k, v]) => params.set(k, v));
    router.push(`?${params.toString()}`);
  };
  return [searchParams, setParams];
}

export function Navigate({ to, replace }) {
  const router = useRouter();
  useEffect(() => {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [to, replace, router]);
  return null;
}

export function Outlet() {
  return null;
}

export function BrowserRouter({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export function Routes({ children }) {
  return <>{children}</>;
}

export function Route() {
  return null;
}
