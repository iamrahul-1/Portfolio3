import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#16404D] to-[#0E2A33] text-[#DDA853]">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-[#EDCA95] mb-4">Please refresh the page to try again</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-[#DDA853] text-[#16404D] rounded-lg hover:bg-[#E5B974] transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
