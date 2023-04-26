function NewsLetter() {
  return (
    <div className="news">
      <input
        type="email"
        placeholder="insert your personal email address ..."
      />
      <button className="btn btn--main" type="submit">
        submit
      </button>
    </div>
  );
}

export default NewsLetter;
