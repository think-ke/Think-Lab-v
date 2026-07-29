const DashboardMockup = () => {
  return (
    <div className="rounded-3xl bg-violet-50 p-10 shadow-2xl">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        {/* Header */}

        <div className="flex items-center justify-between border-b p-4">
          <div className="space-y-1">
            <div className="h-2 w-20 rounded bg-gray-300" />
            <div className="h-2 w-12 rounded bg-gray-200" />
          </div>

          <div className="h-8 w-8 rounded-full bg-violet-600" />
        </div>

        {/* Body */}

        <div className="flex">
          <div className="w-16 border-r bg-gray-50 p-3 space-y-3">
            <div className="h-6 rounded bg-violet-200" />
            <div className="h-6 rounded bg-gray-200" />
            <div className="h-6 rounded bg-gray-200" />
            <div className="h-6 rounded bg-gray-200" />
          </div>

          <div className="flex-1 p-8">
            <div className="rounded-3xl bg-blue-600 p-8">
              <div className="h-6 w-28 rounded bg-white/30" />

              <div className="mt-10 flex justify-center">
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-yellow-300 via-pink-300 to-violet-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;