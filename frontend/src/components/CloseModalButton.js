function CloseButton({ onClick }) {
  return (
    <button className="close-button" onClick={onClick}>
      &#10006; {/* This is a unicode 'X' character */}
    </button>
  );
}

export default CloseButton
