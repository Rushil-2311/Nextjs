import { useRouter } from "next/router";
import Header from "../../components/header";

const message = () => {
  const router = useRouter();
  const { id, message } = router.query;

  return (
    <>
      <Header />
      <h1>Post: {id}</h1>
      <h1>message: {message}</h1>
    </>
  );
};

export default message;
