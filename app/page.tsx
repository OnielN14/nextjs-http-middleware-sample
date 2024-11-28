"use client"

export default function Home() {
  const triggerFetchProxy = async () => {
    try {
      const response = await fetch("/api/basic_not_allowed.php")
      const body = await response.text()

      console.log(body)
    } catch (error) {
      console.error(error)
    }
  }
  const triggerFetchWithoutProxy = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/basic_not_allowed.php`)
      const body = await response.text()

      console.log(body)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-4">
        <button className="h-14 px-4 border hover:bg-gray-100" onClick={triggerFetchProxy}>Click to Request</button>
        <button className="h-14 px-4 border hover:bg-gray-100" onClick={triggerFetchWithoutProxy}>Click to Request (w/ Proxy)</button>

      </div>
    </div>
  );
}
