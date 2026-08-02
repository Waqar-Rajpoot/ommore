import AdminUploadForm from "@/components/Admin/AdminUploadForm";

export const metadata = {
  title: "Admin — Knowledge Base | ommore",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#080B0F] px-4 py-12">
      <AdminUploadForm />
    </main>
  );
}