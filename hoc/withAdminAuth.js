import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAdminAuth = (WrappedComponent) => {
  return function AdminProtected(props) {
    const router = useRouter();

    useEffect(() => {
      const userRole = localStorage.getItem('role'); 
      const user = localStorage.getItem('user'); 

      if(!user)
        {
            router.push('/Login');
        }
      if (userRole !== 'admin') {
        router.push('/404'); 
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;
