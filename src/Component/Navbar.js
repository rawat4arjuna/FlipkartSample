export default function Navbar(props) {
  return (
    <nav class="navbar navbar-light bg-light" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand">FlipKart</a>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
