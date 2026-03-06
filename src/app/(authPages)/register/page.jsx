"use client";

import { registerUser } from "@/app/api/auth/[...nextauth]/registerUser";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    const plyload = { username, email, password };

    const result = await registerUser(plyload);

    console.log("infooo", result);
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input name="username" placeholder="Name" required />

        <br />
        <br />

        <input name="email" type="email" placeholder="Email" required />

        <br />
        <br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
