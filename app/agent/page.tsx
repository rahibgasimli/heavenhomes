import AgentPage from "@/screens/agent";

export const dynamic = "force-dynamic";

export default function Agent({ searchParams }: { searchParams: any }) {
  const member = JSON.parse(searchParams.member);

  return <AgentPage member={member} />;
}
