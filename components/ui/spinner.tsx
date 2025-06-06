// components/ui/spinner.tsx
export default function Spinner() {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-blue-500" />
      </div>
    );
  }
  