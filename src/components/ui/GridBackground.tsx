export default function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="ambient-grid absolute inset-0 opacity-80" />
    </div>
  )
}
