import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup")
    throw json({ message: "Unsupported mode" }, { status: 422 });

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const res = fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    header: {
      "content-type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  if (res.status === 422 || res.status === 401) return res;

  if (!res.ok) throw json({ message: "No authentication" }, { status: 500 });

  return redirect("/");
};
