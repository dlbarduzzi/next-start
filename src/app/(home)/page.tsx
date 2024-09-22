import { Container } from "@/components/container"

export default function Home() {
  const name = "hello"
  return (
    <div className="bg-white">
      <Container className="py-8">
        <div className="text-center">Welcome!</div>
      </Container>
    </div>
  )
}
