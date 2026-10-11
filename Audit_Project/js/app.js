// ============================================================
// === РЕГИСТРАЦИЯ ПЛАГИНА ПОДПИСЕЙ ===
// ============================================================
Chart.register(ChartDataLabels);

// ============================================================
// === СРЕЗЫ ДАННЫХ ===
// chartType: "bar" — столбчатая, отсутствует — круговая (doughnut)
// ============================================================
const SLICES = {
  servers: [
    {
      id: "vendor",
      title: "Серверное оборудование в разрезе вендора",
      column: "Вендор",
      values: [
        "YADRO",
        "Fplus (F+ tech)",
        "Аквариус (Aquarius)",
        "Гравитон",
        "Крафтвей (Kraftway)",
        "Delta Computers",
        "ITPOD",
        "Bitblaze",
        "Inspur",
        "Huawei",
        "H3C",
        "DCN (YunKe)",
        "XFusion",
        "BVK (БВКомпьютерс)",
        "BELSOFT",
        "Тотлер (Totler)",
        "Радзивил",
        "АСТЛАЙН",
        "Dell",
        "HPE",
        "Lenovo",
        "Supermicro",
        "Cisco",
        "IBM",
      ],
    },
    {
      id: "status",
      title: "Анализ использования парка серверного оборудования",
      column: "Статус",
      values: [
        "Продуктивные данные",
        "Не введены в эксплуатацию",
        "Резерв",
        "Тестовый стенд",
        "Списанные",
        "На гарантии",
        "На ремонте",
      ],
    },
    {
      id: "form_factor",
      title: "Серверы в разрезе форм-фактора",
      column: "Форм-фактор",
      values: [
        "Rack 1U",
        "Rack 2U",
        "Rack 4U",
        "Blade",
        "Tower",
        "Multi-node",
        "Edge",
      ],
    },
    {
      id: "os",
      title: "Серверы в разрезе операционной системы",
      column: "ОС",
      chartType: "bar",
      values: [
        "Windows Server 2025 Standard",
        "Windows Server 2025 Datacenter",
        "Windows Server 2022 Standard",
        "Windows Server 2022 Datacenter",
        "Windows Server 2019 Standard",
        "Windows Server 2019 Datacenter",
        "Windows Server 2016 Standard",
        "Windows Server 2016 Datacenter",
        "Windows Server 2012 R2 Standard",
        "Windows Server 2012 R2 Datacenter",
        "Red Hat Enterprise Linux 9",
        "Red Hat Enterprise Linux 8",
        "Red Hat Enterprise Linux 7",
        "Ubuntu Server 24.04 LTS",
        "Ubuntu Server 22.04 LTS",
        "Ubuntu Server 20.04 LTS",
        "Debian 13 (Trixie)",
        "Debian 12 (Bookworm)",
        "Debian 11 (Bullseye)",
        "SUSE Linux Enterprise Server 15",
        "SUSE Linux Enterprise Server 12",
        "Astra Linux Special Edition",
        "Astra Linux Common Edition",
        "РЕД ОС Стандартная",
        "РЕД ОС Сертифицированная",
        "Альт Сервер",
        "Альт Домен",
        "SelectOS",
      ],
    },
    {
      id: "lifecycle",
      title: "Статистика по жизненному циклу серверов (EOSL)",
      column: "Стадия жизненного цикла",
      values: [
        "Актуальные (в поддержке)",
        "End of Sale (EOS)",
        "End of Life (EOL)",
        "End of Support (EOSL)",
        "Планируется вывод",
        "Сняты с поддержки вендором",
      ],
    },
    {
      id: "deployment",
      title:
        "Серверы в разрезе типа развёртывания (Bare Metal / Виртуализация)",
      column: "Тип развёртывания",
      values: [
        "Bare Metal (физический)",
        "Виртуализация",
        "Гибридный",
        "Контейнеризация",
      ],
    },
  ],
  storage: [
    {
      id: "vendor",
      title: "СХД в разрезе вендора",
      column: "Вендор",
      values: [
        "NetApp",
        "Huawei",
        "Dell EMC",
        "HPE",
        "IBM",
        "Pure Storage",
        "Hitachi",
        "Fujitsu",
        "Infortrend",
        "Yadro",
        "Аэродиск",
        "Raise3D",
      ],
    },
    {
      id: "type",
      title: "СХД в разрезе типа",
      column: "Тип СХД",
      values: [
        "SAN (блочная)",
        "NAS (файловая)",
        "Object Storage",
        "Гибридная",
        "All-Flash",
        "Ленточная библиотека",
      ],
    },
    {
      id: "capacity",
      title: "СХД в разрезе объёма",
      column: "Объём",
      values: [
        "До 10 ТБ",
        "10-50 ТБ",
        "50-100 ТБ",
        "100-500 ТБ",
        "500 ТБ - 1 ПБ",
        "Более 1 ПБ",
      ],
    },
    {
      id: "protocol",
      title: "СХД в разрезе протоколов доступа",
      column: "Протокол",
      values: ["iSCSI", "Fibre Channel", "NFS", "SMB/CIFS", "S3", "NVMe-oF"],
    },
    {
      id: "status",
      title: "Статус использования СХД",
      column: "Статус",
      values: [
        "Продуктивные данные",
        "Не введены в эксплуатацию",
        "Резерв",
        "Архив",
        "Выведены из эксплуатации",
      ],
    },
    {
      id: "lifecycle",
      title: "Статистика по жизненному циклу СХД (EOSL)",
      column: "Стадия жизненного цикла",
      values: [
        "Актуальные (в поддержке)",
        "End of Sale (EOS)",
        "End of Life (EOL)",
        "End of Support (EOSL)",
        "Планируется вывод",
        "Сняты с поддержки вендором",
      ],
    },
  ],
  virtual: [
    {
      id: "hypervisor",
      title: "Виртуализация в разрезе гипервизора",
      column: "Гипервизор",
      values: [
        "VMware vSphere",
        "Microsoft Hyper-V",
        "Proxmox VE",
        "KVM",
        "XenServer",
        "Nutanix AHV",
        "oVirt",
        "zVirt",
        "Р-Виртуализация",
        "Skala-R",
        "Brest",
      ],
    },
    {
      id: "vm_os",
      title: "Виртуальные машины в разрезе ОС",
      column: "ОС гостевой ВМ",
      chartType: "bar",
      values: [
        "Windows Server 2025",
        "Windows Server 2022",
        "Windows Server 2019",
        "Windows Server 2016",
        "Windows Server 2012 R2",
        "Windows Server 2008 R2",
        "Windows 11",
        "Windows 10",
        "Windows 8.1",
        "Windows 7",
        "Red Hat Enterprise Linux 9",
        "Red Hat Enterprise Linux 8",
        "Red Hat Enterprise Linux 7",
        "CentOS 8",
        "CentOS 7",
        "CentOS Stream 9",
        "CentOS Stream 10",
        "Fedora Server",
        "Ubuntu 24.04 LTS",
        "Ubuntu 22.04 LTS",
        "Ubuntu 20.04 LTS",
        "Debian 12 (Bookworm)",
        "Debian 11 (Bullseye)",
        "Debian 10 (Buster)",
        "SUSE Linux Enterprise Server 15",
        "SUSE Linux Enterprise Server 12",
        "Oracle Linux 9",
        "Oracle Linux 8",
        "Astra Linux Special Edition",
        "Astra Linux Common Edition",
        "РЕД ОС",
        "Альт Сервер",
        "Альт Домен",
        "ROSA Server",
        "SelectOS",
        "FreeBSD",
        "Другое",
      ],
    },
    {
      id: "vm_status",
      title: "Виртуальные машины в разрезе статуса",
      column: "Статус ВМ",
      values: [
        "В работе",
        "Остановлена",
        "В резерве",
        "Тестовая",
        "Архивная",
        "Проблемная",
      ],
    },
  ],
  workstations: [
    {
      id: "os",
      title: "Рабочие станции в разрезе операционной системы",
      column: "ОС",
      values: [
        // === Windows Desktop ===
        "Windows 11 Pro",
        "Windows 11 Enterprise",
        "Windows 11 Home",
        "Windows 10 Pro",
        "Windows 10 Enterprise",
        "Windows 10 Home",
        "Windows 8.1",
        "Windows 7",

        // === macOS ===
        "macOS Sonoma (14)",
        "macOS Ventura (13)",
        "macOS Monterey (12)",
        "macOS Big Sur (11)",
        "macOS Catalina (10.15)",

        // === Linux Desktop ===
        "Ubuntu Desktop 24.04 LTS",
        "Ubuntu Desktop 22.04 LTS",
        "Ubuntu Desktop 20.04 LTS",
        "Debian Desktop 12",
        "Debian Desktop 11",
        "Linux Mint 21",
        "Linux Mint 22",
        "Fedora Workstation 40",
        "Fedora Workstation 39",

        // === Российские ОС ===
        "Astra Linux (рабочая станция)",
        "РЕД ОС (рабочая станция)",
        "Альт Рабочая станция",
        "ROSA Desktop",

        // === Прочие ===
        "FreeBSD Desktop",
        "Другое",
      ],
    },
  ],
};

const charts = {};
const COLORS = [
  "#3498db",
  "#e74c3c",
  "#f1c40f",
  "#2ecc71",
  "#9b59b6",
  "#e67e22",
  "#1abc9c",
  "#34495e",
  "#ff6b6b",
  "#4ecdc4",
  "#c0392b",
  "#16a085",
  "#8e44ad",
  "#d35400",
  "#2980b9",
];
const DARK_COLORS = [
  "#3498db",
  "#e74c3c",
  "#2ecc71",
  "#9b59b6",
  "#e67e22",
  "#1abc9c",
  "#34495e",
  "#c0392b",
  "#16a085",
  "#8e44ad",
  "#d35400",
  "#2980b9",
  "#ff6b6b",
];

const currentSlice = {
  servers: null,
  storage: null,
  virtual: null,
  workstations: null,
};

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

function switchTab(evt, tabId) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((content) => content.classList.remove("active"));
  evt.currentTarget.classList.add("active");
  document.getElementById(tabId).classList.add("active");
  setTimeout(() => {
    Object.values(charts).forEach((chart) => chart.resize());
  }, 50);
}

function onSliceChange(section) {
  const sliceId = document.getElementById(`slice-${section}`).value;
  const slice = SLICES[section].find((s) => s.id === sliceId);
  if (!slice) return;

  const oldType = currentSlice[section]?.chartType || "doughnut";
  const newType = slice.chartType || "doughnut";

  currentSlice[section] = slice;

  // Если тип диаграммы изменился — пересоздаём её
  if (oldType !== newType && charts[section]) {
    charts[section].destroy();
    initChart(section);
  }

  document.getElementById(`chart-title-${section}`).textContent = slice.title;
  document.getElementById(`col-header-${section}`).textContent = slice.column;

  document
    .querySelectorAll(`#tbody-${section} .vendor-select`)
    .forEach((el) => {
      if (el.slim) el.slim.destroy();
    });

  document.getElementById(`tbody-${section}`).innerHTML = "";
  addRow(section);
  addRow(section);
  addRow(section);
}

function buildSelectOptions(section, selectedValue = "") {
  const slice = currentSlice[section];
  if (!slice) return "";

  const values = slice.values || [];
  let options = '<option value="">— Выберите —</option>';

  values.forEach((value) => {
    const selected = value === selectedValue ? "selected" : "";
    options += `<option value="${value}" ${selected}>${value}</option>`;
  });

  return options;
}

function addRow(section, label = "", value = "") {
  const tbody = document.getElementById(`tbody-${section}`);
  if (!currentSlice[section]) return;
  const tr = document.createElement("tr");

  tr.innerHTML = `
          <td>
            <select class="select-field vendor-select">
              ${buildSelectOptions(section, label)}
            </select>
          </td>
          <td><input type="number" class="input-field value-input" placeholder="0" value="${value}" min="0"></td>
          <td><button class="btn btn-del" title="Удалить">✕</button></td>
        `;

  const select = tr.querySelector(".vendor-select");

  select.slim = new SlimSelect({
    select: select,
    showSearch: true,
    searchPlaceholder: "Поиск...",
    allowDeselect: true,
    settings: {
      placeholderText: "— Выберите —",
      openPosition: "down",
    },
    events: {
      afterChange: () => updateChart(section),
    },
  });

  tr.querySelectorAll("input").forEach((input) =>
    input.addEventListener("input", () => updateChart(section)),
  );

  tr.querySelector(".btn-del").addEventListener("click", () => {
    if (select.slim) select.slim.destroy();
    tr.remove();
    updateChart(section);
  });

  tbody.appendChild(tr);
  updateChart(section);
}

function clearRows(section) {
  document
    .querySelectorAll(`#tbody-${section} .vendor-select`)
    .forEach((el) => {
      if (el.slim) el.slim.destroy();
    });
  document.getElementById(`tbody-${section}`).innerHTML = "";
  updateChart(section);
}

function getTableData(section) {
  const rows = document.querySelectorAll(`#tbody-${section} tr`);
  const labels = [];
  const values = [];
  rows.forEach((row) => {
    const select = row.querySelector(".vendor-select");
    const valueInput = row.querySelector(".value-input");
    const label = select ? select.value.trim() : "";
    const value = parseFloat(valueInput.value) || 0;
    if (label !== "") {
      labels.push(label);
      values.push(value);
    }
  });
  return { labels, values };
}

function initChart(section) {
  const ctx = document.getElementById(`chart-${section}`).getContext("2d");
  const type = currentSlice[section]?.chartType || "doughnut";

  const commonPlugins = {
    legend: {
      display: type === "doughnut",
      position: "bottom",
      labels: { font: { size: 12 }, padding: 10 },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const value = type === "bar" ? context.parsed.y : context.parsed;
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage =
            total > 0 ? ((value / total) * 100).toFixed(1) + "%" : "0%";
          return ` ${context.label}: ${value} шт. (${percentage})`;
        },
      },
    },
    datalabels: {
      display: function (context) {
        const value = context.dataset.data[context.dataIndex];
        const total = context.dataset.data.reduce((a, b) => a + b, 0);
        const percentage = total > 0 ? (value / total) * 100 : 0;
        if (type === "bar") return value > 0;
        return percentage >= 4 && value > 0;
      },
      color: function (context) {
        if (type === "bar") return "#2c3e50";
        const bgColor = context.dataset.backgroundColor[context.dataIndex];
        return DARK_COLORS.includes(bgColor) ? "#fff" : "#000";
      },
      font: { weight: "bold", size: 12 },
      textAlign: "center",
      anchor: type === "bar" ? "end" : "center",
      align: type === "bar" ? "end" : "center",
      offset: type === "bar" ? 4 : 0,
      formatter: function (value, context) {
        const total = context.dataset.data.reduce((a, b) => a + b, 0);
        const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
        if (type === "bar") return value;
        return `${percentage}%\n(${value} шт.)`;
      },
      rotation: 0,
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: type === "bar" ? 30 : 20 },
    plugins: commonPlugins,
    animation: { duration: 300 },
  };

  if (type === "doughnut") {
    options.cutout = "50%";
  }

  if (type === "bar") {
    options.scales = {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1, precision: 0, font: { size: 12 } },
        suggestedMax: 5,
        grid: { color: "#eee" },
        title: {
          display: true,
          text: "Количество, шт.",
          font: { size: 12 },
        },
      },
      x: {
        ticks: {
          font: { size: 10 },
          maxRotation: 60,
          minRotation: 45,
          autoSkip: false,
        },
        grid: { display: false },
      },
    };
  }

  charts[section] = new Chart(ctx, {
    type: type,
    data: {
      labels: [],
      datasets: [
        {
          label: "Количество, шт.",
          data: [],
          backgroundColor: COLORS,
          borderWidth: type === "doughnut" ? 2 : 0,
          borderColor: "#fff",
          borderRadius: type === "bar" ? 4 : 0,
          barPercentage: type === "bar" ? 0.5 : undefined,
          categoryPercentage: type === "bar" ? 0.7 : undefined,
        },
      ],
    },
    options: options,
    plugins: [ChartDataLabels],
  });
}

function updateChart(section) {
  const chart = charts[section];
  if (!chart) return;

  const data = getTableData(section);
  const rows = document.querySelectorAll(`#tbody-${section} tr`);

  // === ПРОВЕРКА НА ДУБЛИКАТЫ ===
  const seen = new Map(); // label -> массив строк
  rows.forEach((row) => {
    const select = row.querySelector(".vendor-select");
    const label = select ? select.value.trim() : "";
    if (label !== "") {
      if (!seen.has(label)) seen.set(label, []);
      seen.get(label).push(row);
    }
  });

  // Снимаем старую подсветку
  rows.forEach((row) => row.classList.remove("has-duplicate"));

  // Подсвечиваем строки с повторяющимися значениями
  let hasDuplicates = false;
  seen.forEach((rowList) => {
    if (rowList.length > 1) {
      hasDuplicates = true;
      rowList.forEach((row) => row.classList.add("has-duplicate"));
    }
  });

  // Показываем/скрываем предупреждение
  const warning = document.getElementById(`warning-${section}`);
  if (warning) warning.classList.toggle("visible", hasDuplicates);

  // === ОБНОВЛЕНИЕ ДИАГРАММЫ ===
  chart.data.labels = data.labels.slice();
  chart.data.datasets[0].data = data.values.slice();
  chart.data.datasets[0].backgroundColor = data.labels.map(
    (_, i) => COLORS[i % COLORS.length],
  );
  chart.update();

  // === СЧЁТЧИК ===
  const total = data.values.reduce((a, b) => a + b, 0);
  document.getElementById(`counter-${section}`).textContent =
    `Всего позиций: ${data.labels.length} | Всего единиц: ${total}`;
}

function downloadChart(section) {
  const chart = charts[section];
  const title = currentSlice[section]
    ? currentSlice[section].title
    : "Диаграмма";
  if (!chart || chart.data.labels.length === 0) {
    showToast("⚠️ Сначала добавьте данные");
    return;
  }
  const chartImage = chart.toBase64Image("image/png", 1);
  const tempCanvas = document.createElement("canvas");
  const ctx = tempCanvas.getContext("2d");
  const width = 1000,
    headerHeight = 80,
    chartHeight = 750,
    padding = 40;
  tempCanvas.width = width;
  tempCanvas.height = headerHeight + chartHeight + padding * 2;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
  ctx.fillStyle = "#2c3e50";
  ctx.font = 'bold 24px "Segoe UI", Arial, sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  wrapText(ctx, title, width / 2, headerHeight / 2 + 10, width - 60, 28);
  const img = new Image();
  img.onload = function () {
    const imgAspect = img.width / img.height;
    const maxWidth = width - padding * 2,
      maxHeight = chartHeight;
    let drawWidth = maxWidth,
      drawHeight = drawWidth / imgAspect;
    if (drawHeight > maxHeight) {
      drawHeight = maxHeight;
      drawWidth = drawHeight * imgAspect;
    }
    const x = (width - drawWidth) / 2,
      y = headerHeight + padding;
    ctx.drawImage(img, x, y, drawWidth, drawHeight);
    const link = document.createElement("a");
    link.download = title.replace(/[^a-zA-Zа-яА-Я0-9]/g, "_") + ".png";
    link.href = tempCanvas.toDataURL("image/png");
    link.click();
    showToast("✅ Диаграмма сохранена");
  };
  img.src = chartImage;
}

async function copyChart(section) {
  const chart = charts[section];
  const title = currentSlice[section]
    ? currentSlice[section].title
    : "Диаграмма";
  if (!chart || chart.data.labels.length === 0) {
    showToast("⚠️ Сначала добавьте данные");
    return;
  }
  const chartImage = chart.toBase64Image("image/png", 1);
  const tempCanvas = document.createElement("canvas");
  const ctx = tempCanvas.getContext("2d");
  const width = 1000,
    headerHeight = 80,
    chartHeight = 750,
    padding = 40;
  tempCanvas.width = width;
  tempCanvas.height = headerHeight + chartHeight + padding * 2;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
  ctx.fillStyle = "#2c3e50";
  ctx.font = 'bold 24px "Segoe UI", Arial, sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  wrapText(ctx, title, width / 2, headerHeight / 2 + 10, width - 60, 28);
  const img = new Image();
  img.onload = async function () {
    const imgAspect = img.width / img.height;
    const maxWidth = width - padding * 2,
      maxHeight = chartHeight;
    let drawWidth = maxWidth,
      drawHeight = drawWidth / imgAspect;
    if (drawHeight > maxHeight) {
      drawHeight = maxHeight;
      drawWidth = drawHeight * imgAspect;
    }
    const x = (width - drawWidth) / 2,
      y = headerHeight + padding;
    ctx.drawImage(img, x, y, drawWidth, drawHeight);
    tempCanvas.toBlob(async (blob) => {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        showToast("📋 Скопировано! Вставьте в Word (Ctrl+V)");
      } catch (err) {
        showToast("❌ Не удалось скопировать");
        console.error(err);
      }
    });
  };
  img.src = chartImage;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  const lines = [];
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      lines.push(line);
      line = words[n] + " ";
    } else {
      line = testLine;
    }
  }
  lines.push(line);
  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((l, i) => ctx.fillText(l.trim(), x, startY + i * lineHeight));
}

window.onload = function () {
  const sections = ["servers", "storage", "virtual", "workstations"];
  sections.forEach((section) => {
    // Устанавливаем начальный срез, чтобы initChart знал тип
    const sliceSelect = document.getElementById(`slice-${section}`);
    SLICES[section].forEach((slice) => {
      const option = document.createElement("option");
      option.value = slice.id;
      option.textContent = slice.title;
      sliceSelect.appendChild(option);
    });
    sliceSelect.value = SLICES[section][0].id;
    currentSlice[section] = SLICES[section][0];

    initChart(section);
    onSliceChange(section);
  });
};
