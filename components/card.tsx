export default function Card({ title }: { title: string }) {
  return (
    <div className="border rounded-lg p-4 mt-4 bg-white shadow-sm">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">Konteks: ...</p>
      <p className="text-sm text-gray-600">Tujuan: ...</p>
    </div>
  );
}