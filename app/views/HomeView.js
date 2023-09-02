export const HomeView = /*html*/ `
  <section class="row">
    <div class="navigation">
      <nav class="navbar navbar-dark navbar-expand px-2 text-center">
      <div class="time text-center text-light rounded">
      <h1 id="time">Time of Day</h1>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="flex-grow-1 justify-content-end align-items-end d-flex" id="authstate">
        </div>
      </nav>
    </div>
  </section>
  <section class="row justify-content-center">
    <div class="col-12 text-center text-light p-0 quote-area" id="quote-area">
      <h2 id="quote">"Here is an inspiring Quote"</h2>
      <p id="author">Here is the author of the quote</p>
    </div>  
    <div class="image-author col-2">
    <p id="image-author">image author</p>
    </div>
    <div class="col-2 weather rounded selectable" id="weather" onclick="app.WeatherController.toggleTemperature()">
      <h2 class="text-center text-light">City</h2>
      <p class="text-center text-light">Lorem ipsum dolor sit amet.</p>
      <h3 class="text-center text-light temperature">Temperature</h3>
    </div>
    <div class="todo-list p-3 col-2">
      <p class="p-2">Your To Do List</p>
      <p id="todo-count">Incomplete Todos: 0</p>
      <form onsubmit="app.TodosController.createTodo()" id="todo-form">
      <div class="d-flex p-2">
        <input class="input-description" maxlength="25" name="description" placeholder="To Do">
        <button type="submit">submit</button>
      </div>
      </form>
      <div class="align-items-center p-3" id="todos-list">
      </div>
    </div>
  </section>
`