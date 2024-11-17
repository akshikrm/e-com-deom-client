import { cookies } from "next/headers";
//import { useRouter } from "next/navigation";

export default async function Dashboard() {
  //const router = useRouter();
  //router.replace("/products");
  const cookieStore = await cookies();

  console.log(cookieStore.get("auth-token"));
  return <h1> dashboard</h1>;
}
