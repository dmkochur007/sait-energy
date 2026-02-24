"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "use-cases", label: "Діаграма прецедентів" },
  { id: "structure", label: "Структура сайту" },
  { id: "components", label: "Взаємодія компонентів" },
  { id: "algorithm", label: "Алгоритм розробки" },
]

export default function DiagramsPage() {
  const [activeTab, setActiveTab] = useState("use-cases")

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 lg:px-8">
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {"Схеми проєкту EnergyStore"}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {"Технічна документація: діаграми архітектури та проєктування сайту"}
      </p>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2 border-b border-border pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-6">
        {activeTab === "use-cases" && <UseCaseDiagram />}
        {activeTab === "structure" && <SiteStructureDiagram />}
        {activeTab === "components" && <ComponentInteractionDiagram />}
        {activeTab === "algorithm" && <AlgorithmDiagram />}
      </div>
    </div>
  )
}

/* ==============================
   1. USE CASE DIAGRAM
   ============================== */
function UseCaseDiagram() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-foreground">
        {"1. Діаграма прецедентів (Use Case Diagram)"}
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">
        {"Відображає взаємодію акторів (Відвідувач, Зареєстрований користувач, Адміністратор) з функціональними можливостями системи."}
      </p>
      <svg
        viewBox="0 0 1100 720"
        className="w-full"
        style={{ minWidth: 800 }}
        role="img"
        aria-label="Діаграма прецедентів"
      >
        {/* System boundary */}
        <rect
          x="250" y="30" width="600" height="660"
          rx="20" ry="20"
          fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="8 4"
        />
        <text x="550" y="60" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#2563eb">
          {"EnergyStore - Інтернет-магазин"}
        </text>

        {/* Actor: Visitor */}
        <g transform="translate(100, 200)">
          <circle cx="0" cy="0" r="16" fill="none" stroke="#1e293b" strokeWidth="2" />
          <line x1="0" y1="16" x2="0" y2="50" stroke="#1e293b" strokeWidth="2" />
          <line x1="-20" y1="30" x2="20" y2="30" stroke="#1e293b" strokeWidth="2" />
          <line x1="0" y1="50" x2="-15" y2="75" stroke="#1e293b" strokeWidth="2" />
          <line x1="0" y1="50" x2="15" y2="75" stroke="#1e293b" strokeWidth="2" />
          <text x="0" y="95" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1e293b">
            {"Відвідувач"}
          </text>
        </g>

        {/* Actor: Registered User */}
        <g transform="translate(100, 480)">
          <circle cx="0" cy="0" r="16" fill="none" stroke="#1e293b" strokeWidth="2" />
          <line x1="0" y1="16" x2="0" y2="50" stroke="#1e293b" strokeWidth="2" />
          <line x1="-20" y1="30" x2="20" y2="30" stroke="#1e293b" strokeWidth="2" />
          <line x1="0" y1="50" x2="-15" y2="75" stroke="#1e293b" strokeWidth="2" />
          <line x1="0" y1="50" x2="15" y2="75" stroke="#1e293b" strokeWidth="2" />
          <text x="0" y="95" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1e293b">
            {"Зареєстрований"}
          </text>
          <text x="0" y="110" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1e293b">
            {"користувач"}
          </text>
        </g>

        {/* Actor: Admin */}
        <g transform="translate(1000, 350)">
          <circle cx="0" cy="0" r="16" fill="none" stroke="#1e293b" strokeWidth="2" />
          <line x1="0" y1="16" x2="0" y2="50" stroke="#1e293b" strokeWidth="2" />
          <line x1="-20" y1="30" x2="20" y2="30" stroke="#1e293b" strokeWidth="2" />
          <line x1="0" y1="50" x2="-15" y2="75" stroke="#1e293b" strokeWidth="2" />
          <line x1="0" y1="50" x2="15" y2="75" stroke="#1e293b" strokeWidth="2" />
          <text x="0" y="95" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1e293b">
            {"Адміністратор"}
          </text>
        </g>

        {/* Use Cases - Visitor */}
        <UseCaseEllipse cx={420} cy={100} label="Переглядати головну" />
        <UseCaseEllipse cx={420} cy={170} label="Переглядати каталог" />
        <UseCaseEllipse cx={420} cy={240} label="Фільтрувати товари" />
        <UseCaseEllipse cx={420} cy={310} label="Переглядати товар" />
        <UseCaseEllipse cx={420} cy={380} label="Додавати в кошик" />

        {/* Use Cases - Registered */}
        <UseCaseEllipse cx={600} cy={450} label="Реєструватись" />
        <UseCaseEllipse cx={600} cy={520} label="Авторизуватись" />
        <UseCaseEllipse cx={600} cy={590} label="Оформити замовлення" />
        <UseCaseEllipse cx={600} cy={660} label="Переглядати кошик" />

        {/* Use Cases - Admin */}
        <UseCaseEllipse cx={700} cy={170} label="Отримувати email-сповіщення" />
        <UseCaseEllipse cx={700} cy={240} label="Управляти замовленнями" />
        <UseCaseEllipse cx={700} cy={310} label="Управляти товарами" />

        {/* Lines - Visitor to use cases */}
        <line x1="120" y1="200" x2="340" y2="100" stroke="#64748b" strokeWidth="1.5" />
        <line x1="120" y1="200" x2="340" y2="170" stroke="#64748b" strokeWidth="1.5" />
        <line x1="120" y1="200" x2="340" y2="240" stroke="#64748b" strokeWidth="1.5" />
        <line x1="120" y1="200" x2="340" y2="310" stroke="#64748b" strokeWidth="1.5" />
        <line x1="120" y1="200" x2="340" y2="380" stroke="#64748b" strokeWidth="1.5" />

        {/* Lines - Registered to use cases */}
        <line x1="120" y1="480" x2="520" y2="450" stroke="#64748b" strokeWidth="1.5" />
        <line x1="120" y1="480" x2="520" y2="520" stroke="#64748b" strokeWidth="1.5" />
        <line x1="120" y1="480" x2="520" y2="590" stroke="#64748b" strokeWidth="1.5" />
        <line x1="120" y1="480" x2="520" y2="660" stroke="#64748b" strokeWidth="1.5" />

        {/* Lines - Admin to use cases */}
        <line x1="980" y1="350" x2="800" y2="170" stroke="#64748b" strokeWidth="1.5" />
        <line x1="980" y1="350" x2="800" y2="240" stroke="#64748b" strokeWidth="1.5" />
        <line x1="980" y1="350" x2="800" y2="310" stroke="#64748b" strokeWidth="1.5" />

        {/* Include/Extend relationships */}
        {/* Checkout includes View Cart */}
        <line x1="600" y1="605" x2="600" y2="648" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="6 3" />
        <text x="620" y="630" fontSize="10" fill="#2563eb" fontStyle="italic">{"<<include>>"}</text>

        {/* Register extends Login */}
        <line x1="600" y1="465" x2="600" y2="508" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="6 3" />
        <text x="620" y="492" fontSize="10" fill="#2563eb" fontStyle="italic">{"<<extend>>"}</text>

        {/* Filter extends Catalog */}
        <line x1="420" y1="185" x2="420" y2="228" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="6 3" />
        <text x="440" y="212" fontSize="10" fill="#2563eb" fontStyle="italic">{"<<include>>"}</text>

        {/* Generalization: Registered inherits Visitor */}
        <line x1="100" y1="300" x2="100" y2="465" stroke="#1e293b" strokeWidth="1.5" />
        <polygon points="100,305 93,320 107,320" fill="none" stroke="#1e293b" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

function UseCaseEllipse({ cx, cy, label }: { cx: number; cy: number; label: string }) {
  return (
    <g>
      <ellipse
        cx={cx} cy={cy} rx="100" ry="24"
        fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5"
      />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="12" fill="#1e293b">
        {label}
      </text>
    </g>
  )
}

/* ==============================
   2. SITE STRUCTURE DIAGRAM
   ============================== */
function SiteStructureDiagram() {
  const boxW = 180
  const boxH = 50

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-foreground">
        {"2. Структура сайту (Site Map)"}
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">
        {"Ієрархічна структура сторінок та маршрутів веб-додатку EnergyStore."}
      </p>
      <svg
        viewBox="0 0 1100 700"
        className="w-full"
        style={{ minWidth: 800 }}
        role="img"
        aria-label="Структура сайту"
      >
        {/* Level 0: Root Layout */}
        <StructBox x={460} y={20} w={boxW} h={boxH} label="layout.tsx" sublabel="(RootLayout)" primary />

        {/* Line from root to pages level */}
        <line x1="550" y1="70" x2="550" y2="110" stroke="#94a3b8" strokeWidth="2" />

        {/* Level 1: Main pages */}
        {/* Horizontal connector */}
        <line x1="100" y1="110" x2="1000" y2="110" stroke="#94a3b8" strokeWidth="2" />

        {/* Vertical connectors down */}
        {[100, 280, 460, 640, 820, 1000].map((x) => (
          <line key={x} x1={x} y1="110" x2={x} y2="130" stroke="#94a3b8" strokeWidth="2" />
        ))}

        {/* Pages */}
        <StructBox x={100 - boxW / 2} y={130} w={boxW} h={boxH} label="/" sublabel="Головна сторінка" />
        <StructBox x={280 - boxW / 2} y={130} w={boxW} h={boxH} label="/catalog" sublabel="Каталог товарів" />
        <StructBox x={460 - boxW / 2} y={130} w={boxW} h={boxH} label="/product/[id]" sublabel="Сторінка товару" />
        <StructBox x={640 - boxW / 2} y={130} w={boxW} h={boxH} label="/cart" sublabel="Кошик" />
        <StructBox x={820 - boxW / 2} y={130} w={boxW} h={boxH} label="/checkout" sublabel="Оформлення" />
        <StructBox x={1000 - boxW / 2} y={130} w={boxW} h={boxH} label="/register" sublabel="Реєстрація" />

        {/* Level 1b: Login */}
        <line x1="1000" y1="180" x2="1000" y2="210" stroke="#94a3b8" strokeWidth="2" />
        <StructBox x={1000 - boxW / 2} y={210} w={boxW} h={boxH} label="/login" sublabel="Авторизація" />

        {/* Level 2: Components */}
        <text x="550" y="305" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2563eb">
          {"Спільні компоненти (Components)"}
        </text>

        {/* Components row */}
        <StructBox x={60} y={320} w={160} h={boxH} label="Navbar" sublabel="Навігаційна панель" accent />
        <StructBox x={240} y={320} w={160} h={boxH} label="SiteFooter" sublabel="Футер сайту" accent />
        <StructBox x={420} y={320} w={160} h={boxH} label="ProductCard" sublabel="Картка товару" accent />
        <StructBox x={600} y={320} w={160} h={boxH} label="ThemeProvider" sublabel="Тема оформлення" accent />
        <StructBox x={780} y={320} w={160} h={boxH} label="CartProvider" sublabel="Контекст кошика" accent />

        {/* Level 3: Data layer */}
        <text x="550" y="425" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2563eb">
          {"Рівень даних (Data Layer)"}
        </text>

        <StructBox x={150} y={440} w={200} h={boxH} label="lib/products.ts" sublabel="База товарів (65 товарів)" data />
        <StructBox x={400} y={440} w={200} h={boxH} label="lib/cart-context.tsx" sublabel="Стан кошика (Context)" data />
        <StructBox x={650} y={440} w={200} h={boxH} label="lib/constants.ts" sublabel="Константи (email)" data />

        {/* Level 4: API */}
        <text x="550" y="545" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2563eb">
          {"API маршрути (Server)"}
        </text>

        <StructBox x={350} y={560} w={240} h={boxH} label="/api/send-email" sublabel="POST: Реєстрація / Замовлення" api />

        {/* Level 5: External */}
        <text x="550" y="655" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2563eb">
          {"Зовнішні сервіси"}
        </text>

        <StructBox x={300} y={670} w={200} h={40} label="SMTP (Nodemailer)" sublabel="" external />
        <StructBox x={560} y={670} w={200} h={40} label="Vercel Analytics" sublabel="" external />

        {/* Connecting lines: API to external */}
        <line x1="470" y1="610" x2="400" y2="670" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />
        <line x1="470" y1="610" x2="660" y2="670" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />
      </svg>
    </div>
  )
}

function StructBox({
  x, y, w, h, label, sublabel, primary, accent, data, api, external,
}: {
  x: number; y: number; w: number; h: number; label: string; sublabel: string
  primary?: boolean; accent?: boolean; data?: boolean; api?: boolean; external?: boolean
}) {
  let fill = "#f8fafc"
  let stroke = "#cbd5e1"
  let textColor = "#1e293b"

  if (primary) { fill = "#2563eb"; stroke = "#1d4ed8"; textColor = "#ffffff" }
  if (accent) { fill = "#eff6ff"; stroke = "#2563eb" }
  if (data) { fill = "#f0fdf4"; stroke = "#16a34a" }
  if (api) { fill = "#fef3c7"; stroke = "#d97706" }
  if (external) { fill = "#fef2f2"; stroke = "#dc2626" }

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" ry="8" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text x={x + w / 2} y={y + (sublabel ? h / 2 - 4 : h / 2 + 4)} textAnchor="middle" fontSize="12" fontWeight="600" fill={textColor}>
        {label}
      </text>
      {sublabel && (
        <text x={x + w / 2} y={y + h / 2 + 12} textAnchor="middle" fontSize="10" fill={primary ? "#e2e8f0" : "#64748b"}>
          {sublabel}
        </text>
      )}
    </g>
  )
}

/* ==============================
   3. COMPONENT INTERACTION DIAGRAM
   ============================== */
function ComponentInteractionDiagram() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-foreground">
        {"3. Взаємодія компонентів сайту"}
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">
        {"Показує потоки даних та взаємозв'язки між клієнтськими компонентами, контекстом, сервером та зовнішніми сервісами."}
      </p>
      <svg
        viewBox="0 0 1100 750"
        className="w-full"
        style={{ minWidth: 800 }}
        role="img"
        aria-label="Взаємодія компонентів"
      >
        {/* Browser boundary */}
        <rect x="30" y="20" width="700" height="550" rx="16" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="8 4" />
        <text x="50" y="48" fontSize="14" fontWeight="bold" fill="#2563eb">{"Клієнт (Browser)"}</text>

        {/* Server boundary */}
        <rect x="780" y="20" width="290" height="550" rx="16" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="8 4" />
        <text x="800" y="48" fontSize="14" fontWeight="bold" fill="#d97706">{"Сервер (Next.js)"}</text>

        {/* Layout component */}
        <CompBox x={60} y={70} w={650} h={60} label="RootLayout" sub="Navbar + Main + SiteFooter" color="#2563eb" />

        {/* Cart Context */}
        <CompBox x={60} y={160} w={300} h={50} label="CartProvider (Context)" sub="Стан кошика: items, addItem, removeItem" color="#16a34a" />

        {/* Pages */}
        <CompBox x={60} y={240} w={180} h={50} label="HomePage" sub="Популярні, новинки, категорії" color="#6366f1" />
        <CompBox x={260} y={240} w={180} h={50} label="CatalogPage" sub="Фільтри, пошук, сортування" color="#6366f1" />
        <CompBox x={460} y={240} w={180} h={50} label="ProductPage" sub="Деталі товару, характеристики" color="#6366f1" />

        <CompBox x={60} y={320} w={180} h={50} label="CartPage" sub="Список товарів, кількість, сума" color="#6366f1" />
        <CompBox x={260} y={320} w={180} h={50} label="CheckoutPage" sub="Форма: контакти, оплата" color="#6366f1" />
        <CompBox x={460} y={320} w={180} h={50} label="RegisterPage" sub="Форма реєстрації" color="#6366f1" />
        <CompBox x={460} y={400} w={180} h={50} label="LoginPage" sub="Форма авторизації" color="#6366f1" />

        {/* Shared components */}
        <CompBox x={60} y={480} w={140} h={45} label="ProductCard" sub="Картка товару" color="#0891b2" />
        <CompBox x={220} y={480} w={140} h={45} label="Navbar" sub="Навігація, кошик" color="#0891b2" />
        <CompBox x={380} y={480} w={140} h={45} label="SiteFooter" sub="Контакти, посилання" color="#0891b2" />
        <CompBox x={540} y={480} w={140} h={45} label="UI Components" sub="Button, Card, Input..." color="#0891b2" />

        {/* Data layer */}
        <CompBox x={400} y={160} w={260} h={50} label="lib/products.ts" sub="products[], getPopular, getNew, formatPrice" color="#16a34a" />

        {/* Server side */}
        <CompBox x={800} y={80} w={250} h={60} label="API: /api/send-email" sub="POST handler" color="#d97706" />

        <CompBox x={800} y={180} w={250} h={60} label="Email: Реєстрація" sub="Нотифікація адміністратору" color="#dc2626" />
        <CompBox x={800} y={280} w={250} h={60} label="Email: Замовлення" sub="Деталі замовлення + товари" color="#dc2626" />

        <CompBox x={800} y={400} w={250} h={60} label="SMTP / Nodemailer" sub="Зовнішній поштовий сервіс" color="#7c3aed" />

        <CompBox x={800} y={500} w={250} h={50} label="lib/constants.ts" sub="ADMIN_EMAIL" color="#16a34a" />

        {/* Arrows: Pages -> CartContext */}
        <Arrow x1={150} y1={240} x2={210} y2={210} dashed />
        <Arrow x1={350} y1={320} x2={300} y2={210} dashed />
        <Arrow x1={150} y1={320} x2={180} y2={210} dashed />
        <Arrow x1={550} y1={240} x2={350} y2={210} dashed />

        {/* Arrows: Pages -> products.ts */}
        <Arrow x1={260} y1={240} x2={430} y2={210} dashed color="#16a34a" />
        <Arrow x1={460} y1={250} x2={440} y2={210} dashed color="#16a34a" />
        <Arrow x1={150} y1={240} x2={420} y2={200} dashed color="#16a34a" />

        {/* Arrows: Checkout -> API */}
        <Arrow x1={440} y1={340} x2={800} y2={110} color="#d97706" />
        <Arrow x1={640} y1={340} x2={800} y2={110} color="#d97706" />

        {/* Arrows: API -> Emails */}
        <Arrow x1={925} y1={140} x2={925} y2={180} color="#dc2626" />
        <Arrow x1={925} y1={140} x2={925} y2={280} color="#dc2626" />

        {/* Arrows: Emails -> SMTP */}
        <Arrow x1={925} y1={240} x2={925} y2={400} color="#7c3aed" />
        <Arrow x1={925} y1={340} x2={925} y2={400} color="#7c3aed" />

        {/* Arrow: API -> Constants */}
        <Arrow x1={925} y1={460} x2={925} y2={500} color="#16a34a" />

        {/* Legend */}
        <g transform="translate(30, 600)">
          <text x="0" y="0" fontSize="13" fontWeight="bold" fill="#1e293b">{"Легенда:"}</text>

          <rect x="0" y="15" width="16" height="16" rx="3" fill="#eff6ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="24" y="28" fontSize="11" fill="#1e293b">{"Сторінки (Pages)"}</text>

          <rect x="160" y="15" width="16" height="16" rx="3" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
          <text x="184" y="28" fontSize="11" fill="#1e293b">{"Дані (Data Layer)"}</text>

          <rect x="320" y="15" width="16" height="16" rx="3" fill="#ecfeff" stroke="#0891b2" strokeWidth="1.5" />
          <text x="344" y="28" fontSize="11" fill="#1e293b">{"Спільні компоненти"}</text>

          <rect x="500" y="15" width="16" height="16" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
          <text x="524" y="28" fontSize="11" fill="#1e293b">{"API маршрути"}</text>

          <rect x="660" y="15" width="16" height="16" rx="3" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
          <text x="684" y="28" fontSize="11" fill="#1e293b">{"Email-сповіщення"}</text>

          <rect x="840" y="15" width="16" height="16" rx="3" fill="#f5f3ff" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="864" y="28" fontSize="11" fill="#1e293b">{"Зовнішні сервіси"}</text>
        </g>
      </svg>
    </div>
  )
}

function CompBox({
  x, y, w, h, label, sub, color,
}: {
  x: number; y: number; w: number; h: number; label: string; sub: string; color: string
}) {
  const bgColors: Record<string, string> = {
    "#2563eb": "#eff6ff",
    "#16a34a": "#f0fdf4",
    "#6366f1": "#eef2ff",
    "#0891b2": "#ecfeff",
    "#d97706": "#fef3c7",
    "#dc2626": "#fef2f2",
    "#7c3aed": "#f5f3ff",
  }

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={bgColors[color] || "#f8fafc"} stroke={color} strokeWidth="1.5" />
      <text x={x + w / 2} y={y + h / 2 - 4} textAnchor="middle" fontSize="11" fontWeight="600" fill="#1e293b">
        {label}
      </text>
      <text x={x + w / 2} y={y + h / 2 + 10} textAnchor="middle" fontSize="9" fill="#64748b">
        {sub}
      </text>
    </g>
  )
}

function Arrow({
  x1, y1, x2, y2, dashed, color = "#94a3b8",
}: {
  x1: number; y1: number; x2: number; y2: number; dashed?: boolean; color?: string
}) {
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color} strokeWidth="1.5"
      strokeDasharray={dashed ? "5 3" : undefined}
      markerEnd="url(#arrowhead)"
    />
  )
}

/* ==============================
   4. ALGORITHM DIAGRAM (GOST)
   ============================== */
function AlgorithmDiagram() {
  const centerX = 400

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-foreground">
        {"4. Алгоритм розробки сайту (за ГОСТ 19.701-90)"}
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">
        {"Блок-схема алгоритму розробки з використанням стандартних фігур за ГОСТ: термінатор (овал), процес (прямокутник), рішення (ромб), дані (паралелограм)."}
      </p>

      {/* Legend */}
      <div className="mb-6 flex flex-wrap gap-4 rounded-lg border border-border bg-secondary/50 p-4">
        <div className="flex items-center gap-2">
          <svg width="40" height="24"><ellipse cx="20" cy="12" rx="18" ry="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" /></svg>
          <span className="text-xs text-muted-foreground">{"Термінатор (Початок/Кінець)"}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="40" height="24"><rect x="2" y="2" width="36" height="20" rx="3" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" /></svg>
          <span className="text-xs text-muted-foreground">{"Процес (Дія)"}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="40" height="28"><polygon points="20,2 38,14 20,26 2,14" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" /></svg>
          <span className="text-xs text-muted-foreground">{"Рішення (Умова)"}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="44" height="24"><polygon points="8,2 42,2 36,22 2,22" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" /></svg>
          <span className="text-xs text-muted-foreground">{"Дані (Введення/Виведення)"}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="40" height="24"><rect x="2" y="2" width="36" height="20" rx="3" fill="#f5f3ff" stroke="#7c3aed" strokeWidth="1.5" /><line x1="8" y1="2" x2="8" y2="22" stroke="#7c3aed" strokeWidth="1" /><line x1="32" y1="2" x2="32" y2="22" stroke="#7c3aed" strokeWidth="1" /></svg>
          <span className="text-xs text-muted-foreground">{"Підпрограма"}</span>
        </div>
      </div>

      <svg
        viewBox="0 0 800 1680"
        className="w-full"
        style={{ minWidth: 600 }}
        role="img"
        aria-label="Алгоритм розробки сайту"
      >
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#64748b" />
          </marker>
        </defs>

        {/* 1. START */}
        <GostTerminator cx={centerX} cy={30} label="Початок" />
        <GostArrowDown cx={centerX} y1={50} y2={80} />

        {/* 2. Analyze requirements */}
        <GostProcess cx={centerX} cy={105} label="Аналіз вимог та ТЗ" />
        <GostArrowDown cx={centerX} y1={130} y2={155} />

        {/* 3. Input data */}
        <GostData cx={centerX} cy={177} label="Збір даних: товари, бренди, категорії" />
        <GostArrowDown cx={centerX} y1={200} y2={225} />

        {/* 4. Choose tech stack */}
        <GostProcess cx={centerX} cy={250} label="Вибір технологій: Next.js, React, Tailwind" />
        <GostArrowDown cx={centerX} y1={275} y2={305} />

        {/* 5. Decision: Design ready? */}
        <GostDecision cx={centerX} cy={340} label="Дизайн затверджено?" />
        <GostArrowDown cx={centerX} y1={375} y2={400} />
        <text x={centerX + 10} y={393} fontSize="11" fill="#16a34a">{"Так"}</text>

        {/* No branch */}
        <line x1={centerX + 80} y1={340} x2={620} y2={340} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <text x={centerX + 90} y={333} fontSize="11" fill="#dc2626">{"Ні"}</text>
        <GostProcess cx={620} cy={340} label="Доопрацювання дизайну" w={160} />
        <line x1="620" y1="315" x2="620" y2="280" stroke="#64748b" strokeWidth="1.5" />
        <line x1="620" y1="280" x2={centerX} y2="280" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* 6. Create project structure */}
        <GostProcess cx={centerX} cy={425} label="Створення структури проєкту" />
        <GostArrowDown cx={centerX} y1={450} y2={475} />

        {/* 7. Develop layout */}
        <GostSubprogram cx={centerX} cy={500} label="Розробка Layout (Navbar, Footer)" />
        <GostArrowDown cx={centerX} y1={525} y2={555} />

        {/* 8. Create data layer */}
        <GostProcess cx={centerX} cy={580} label="Створення бази товарів (65 товарів)" />
        <GostArrowDown cx={centerX} y1={605} y2={635} />

        {/* 9. Develop pages */}
        <GostSubprogram cx={centerX} cy={660} label="Розробка сторінок: Головна, Каталог, Товар" />
        <GostArrowDown cx={centerX} y1={685} y2={715} />

        {/* 10. Cart system */}
        <GostSubprogram cx={centerX} cy={740} label="Реалізація кошика (CartContext)" />
        <GostArrowDown cx={centerX} y1={765} y2={795} />

        {/* 11. Checkout + Auth */}
        <GostSubprogram cx={centerX} cy={820} label="Оформлення замовлення, Реєстрація, Логін" />
        <GostArrowDown cx={centerX} y1={845} y2={875} />

        {/* 12. API Route */}
        <GostProcess cx={centerX} cy={900} label="Створення API /api/send-email" />
        <GostArrowDown cx={centerX} y1={925} y2={955} />

        {/* 13. Decision: Email works? */}
        <GostDecision cx={centerX} cy={990} label="Email-сповіщення працює?" />
        <GostArrowDown cx={centerX} y1={1025} y2={1055} />
        <text x={centerX + 10} y={1048} fontSize="11" fill="#16a34a">{"Так"}</text>

        {/* No branch for email */}
        <line x1={centerX + 80} y1={990} x2={620} y2={990} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <text x={centerX + 90} y={983} fontSize="11" fill="#dc2626">{"Ні"}</text>
        <GostProcess cx={620} cy={990} label="Налаштування SMTP" w={160} />
        <line x1="620" y1="965" x2="620" y2="940" stroke="#64748b" strokeWidth="1.5" />
        <line x1="620" y1="940" x2={centerX} y2="940" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* 14. Responsive design */}
        <GostProcess cx={centerX} cy={1080} label="Адаптивна верстка (Mobile-first)" />
        <GostArrowDown cx={centerX} y1={1105} y2={1135} />

        {/* 15. Testing */}
        <GostProcess cx={centerX} cy={1160} label="Тестування функціоналу" />
        <GostArrowDown cx={centerX} y1={1185} y2={1215} />

        {/* 16. Decision: Tests pass? */}
        <GostDecision cx={centerX} cy={1250} label="Тести пройдені?" />
        <GostArrowDown cx={centerX} y1={1285} y2={1315} />
        <text x={centerX + 10} y={1308} fontSize="11" fill="#16a34a">{"Так"}</text>

        {/* No branch for tests */}
        <line x1={centerX + 80} y1={1250} x2={620} y2={1250} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <text x={centerX + 90} y={1243} fontSize="11" fill="#dc2626">{"Ні"}</text>
        <GostProcess cx={620} cy={1250} label="Виправлення помилок" w={160} />
        <line x1="620" y1="1225" x2="620" y2="1200" stroke="#64748b" strokeWidth="1.5" />
        <line x1="620" y1="1200" x2={centerX} y2="1200" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* 17. SEO */}
        <GostProcess cx={centerX} cy={1340} label="Оптимізація SEO (metadata, viewport)" />
        <GostArrowDown cx={centerX} y1={1365} y2={1395} />

        {/* 18. Deploy */}
        <GostProcess cx={centerX} cy={1420} label="Деплой на Vercel" />
        <GostArrowDown cx={centerX} y1={1445} y2={1475} />

        {/* 19. Output data */}
        <GostData cx={centerX} cy={1497} label="Результат: робочий сайт EnergyStore" />
        <GostArrowDown cx={centerX} y1={1520} y2={1545} />

        {/* 20. Decision: Client approved? */}
        <GostDecision cx={centerX} cy={1580} label="Замовник прийняв?" />
        <GostArrowDown cx={centerX} y1={1615} y2={1640} />
        <text x={centerX + 10} y={1635} fontSize="11" fill="#16a34a">{"Так"}</text>

        {/* No branch for approval */}
        <line x1={centerX + 80} y1={1580} x2={620} y2={1580} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <text x={centerX + 90} y={1573} fontSize="11" fill="#dc2626">{"Ні"}</text>
        <GostProcess cx={620} cy={1580} label="Внесення правок" w={160} />
        <line x1="620" y1="1555" x2="620" y2="1475" stroke="#64748b" strokeWidth="1.5" />
        <line x1="620" y1="1475" x2={centerX} y2="1475" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* 21. END */}
        <GostTerminator cx={centerX} cy={1660} label="Кінець" />
      </svg>
    </div>
  )
}

/* GOST standard shapes */

function GostTerminator({ cx, cy, label }: { cx: number; cy: number; label: string }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx="80" ry="20" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="13" fontWeight="600" fill="#1e293b">
        {label}
      </text>
    </g>
  )
}

function GostProcess({ cx, cy, label, w = 280 }: { cx: number; cy: number; label: string; w?: number }) {
  return (
    <g>
      <rect x={cx - w / 2} y={cy - 25} width={w} height={50} rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="12" fontWeight="500" fill="#1e293b">
        {label}
      </text>
    </g>
  )
}

function GostDecision({ cx, cy, label }: { cx: number; cy: number; label: string }) {
  const w = 80
  const h = 35
  return (
    <g>
      <polygon
        points={`${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h} ${cx - w},${cy}`}
        fill="#fef3c7" stroke="#d97706" strokeWidth="2"
      />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" fontWeight="500" fill="#1e293b">
        {label}
      </text>
    </g>
  )
}

function GostData({ cx, cy, label }: { cx: number; cy: number; label: string }) {
  const w = 160
  const h = 22
  const skew = 15
  return (
    <g>
      <polygon
        points={`${cx - w + skew},${cy - h} ${cx + w},${cy - h} ${cx + w - skew},${cy + h} ${cx - w},${cy + h}`}
        fill="#f0fdf4" stroke="#16a34a" strokeWidth="2"
      />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="11" fontWeight="500" fill="#1e293b">
        {label}
      </text>
    </g>
  )
}

function GostSubprogram({ cx, cy, label }: { cx: number; cy: number; label: string }) {
  const w = 280
  const h = 50
  return (
    <g>
      <rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx="4" fill="#f5f3ff" stroke="#7c3aed" strokeWidth="2" />
      <line x1={cx - w / 2 + 12} y1={cy - h / 2} x2={cx - w / 2 + 12} y2={cy + h / 2} stroke="#7c3aed" strokeWidth="1.5" />
      <line x1={cx + w / 2 - 12} y1={cy - h / 2} x2={cx + w / 2 - 12} y2={cy + h / 2} stroke="#7c3aed" strokeWidth="1.5" />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="12" fontWeight="500" fill="#1e293b">
        {label}
      </text>
    </g>
  )
}

function GostArrowDown({ cx, y1, y2 }: { cx: number; y1: number; y2: number }) {
  return <line x1={cx} y1={y1} x2={cx} y2={y2} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
}
