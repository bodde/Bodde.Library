export const WorkArea = () => {
  return (

    <div className="flex-1 p-4 surface-50">
      <div className="surface-card p-4 border-round shadow-1">
        <h3>Welcome to Bodde Library</h3>
        <p>This is the main work area where your content will be displayed.</p>

        {/* Sample content to test scrolling */}
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="surface-ground p-3 mb-2 border-round">
            <h5>Content Item {i + 1}</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};