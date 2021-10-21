import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import App from './App';
import Navbar from "./Navbar";
import ColorLinks from "./ColorLinks";
import ColorPage from "./ColorPage";

describe("smoke tests for the color pages app", () => {
  test("the App component will render", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  test("the Navbar component renders", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  test("the ColorLinks component renders", () => {
    render(
      <MemoryRouter>
        <ColorLinks />
      </MemoryRouter>
    );
  });

  test("the ColorPage component renders", () => {
    render(
      <MemoryRouter initialEntries={["/colors/blue"]}>
        <Route path="/colors/:name">
          <ColorPage />
        </Route>
      </MemoryRouter>
    );
  });
});

describe("snapshot tests for each component", () => {
  test("The App component matches the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("The Navbar component matches the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("The ColorLinks component matches the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/colors/blue"]}>
        <Route path="/colors/:name">
          <ColorPage />
        </Route>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("submitting the form adds a new link", () => {
  test("submitting the form should render a new link", () => {
    // Render the App Component
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Check that the "Add Color" button is in the document
    const addBtn = getByText("Add Color");
    expect(addBtn).toBeInTheDocument();
    
    // Click the button and ensure that the form submission button / form is showing
    fireEvent.click(addBtn);
    const submitBtn = getByText("Add Color");
    expect(submitBtn).toBeInTheDocument();
    
    // Check that the input is in the document
    const input = getByLabelText("Enter a Color");
    expect(input).toBeInTheDocument();
    
    // Enter "purple" into the input, and submit the form
    // Finally, check to ensure that that correct HTML is rendered.
    fireEvent.change(input, { target: { value: "purple" }});
    expect(document.body).not.toContainHTML(`<li><a href="/colors/purple">purple</a></li>`);
    fireEvent.click(submitBtn);
    expect(document.body).toContainHTML(`<li><a href="/colors/purple">purple</a></li>`);
  });
});


