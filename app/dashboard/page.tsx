export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to ChadGPT!
        </h1>
        <p className="text-gray-600 mb-6">
          You have successfully logged in to your account.
        </p>
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
          Authentication successful! 🎉
        </div>
      </div>
    </div>
  );
}
