import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("renders a dedicated IT consulting section", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /консультационные услуги в сфере it/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/подключаемся как технический партнёр/i)
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

  it("submits the contact form to the n8n webhook", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    render(<App />);

    await user.type(screen.getByLabelText(/ваше имя/i), "Михаил");
    await user.type(screen.getByLabelText(/компания/i), "Dada Development");
    await user.type(screen.getByLabelText(/контакт/i), "@mikhail");
    await user.type(screen.getByLabelText(/кратко о задаче/i), "Нужен новый продукт");
    await user.click(
      screen.getByRole("button", { name: /запланировать разговор/i })
    );

    expect(fetchMock).toHaveBeenCalledWith(
      "https://n8n.dada-tuda.ru/webhook/contacts-webhook",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "Михаил",
          company: "Dada Development",
          contact: "@mikhail",
          projectBrief: "Нужен новый продукт"
        })
      }
    );

    vi.unstubAllGlobals();
  });
});
