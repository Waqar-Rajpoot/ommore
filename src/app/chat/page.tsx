import ChatWidget from "@/components/chatboat/ChatWidget";

export const metadata = {
  title: "Chat with us | ommore",
  description: "Ask our assistant about our services, process, and policies.",
};

export default function ChatPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#080B0F] px-4 py-12">
      <ChatWidget />
    </main>
  );
}
