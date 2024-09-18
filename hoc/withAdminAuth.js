import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAdminAuth = (WrappedComponent) => {
  return function AdminProtected(props) {
    const router = useRouter();
    //const { component } = router.query;

    useEffect(() => {
      const userRole = localStorage.getItem('role'); 
      const token = localStorage.getItem('authToken');

      if (!token || userRole !== 'admin' ) {
        router.push('/404'); 
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;
