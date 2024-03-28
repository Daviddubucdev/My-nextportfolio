export default function AskButton() {
    return (
        <button className="bg-blue-500 rounded-lg opacity-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">Ask for service?</text>
        </button>
    );
}