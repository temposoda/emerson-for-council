export function VolunteerForm() {
  return (
    <div
      style={{ height: "60vh", width: "80vw" }}
      className="bg-primary-content p-4 flex"
    >
      <iframe
        className="grow"
        src="https://docs.google.com/forms/d/e/1FAIpQLScdBGA2PL6t2_OQkRCk5qhQ0_Brej1QbLdpD2RpJsP_TvLVYw/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
