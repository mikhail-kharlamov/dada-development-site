import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the core hero message and navigation anchors for the landing page", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /разрабатываем программные продукты, автоматизацию и ai-решения для бизнеса/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /посмотреть кейсы/i })
    ).toHaveAttribute("href", "#cases");
    expect(
      screen.getAllByRole("button", { name: /обсудить проект/i })
    ).toHaveLength(2);
  });

  it("shows the featured Dada-Tuda case and the supporting cases grid", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /dada-tuda/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/собственный продукт с микросервисной архитектурой/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /telegram-боты для продаж и автоматизации/i
      })
    ).toBeInTheDocument();
  });

  it("renders a contact form with the required fields", () => {
    render(<App />);

    expect(screen.getByLabelText(/ваше имя/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/компания/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/контакт/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/кратко о задаче/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /запланировать разговор/i })
    ).toBeInTheDocument();
  });
});
