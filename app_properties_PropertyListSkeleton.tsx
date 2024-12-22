export default function PropertyListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden animate-pulse">
          <div className="w-full h-48 bg-gray-300" />
          <div className="p-4">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-full mb-2" />
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-4" />
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-4" />
            <div className="flex justify-between">
              <div className="h-8 bg-gray-300 rounded w-1/3" />
              <div className="h-8 bg-gray-300 rounded w-1/3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

