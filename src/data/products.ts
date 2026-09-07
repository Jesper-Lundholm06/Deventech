import type { Product } from "../types/product";

export const products: Product[] = [
  // —— SETTING ——
  {
    name: "BSM-210",
    machineType: "Band Saw Blade Setting Machine",
    slug: "bsm-210",
    category: "setting",
    shortDescription:
      "Automatic band saw blade setting to the highest standards, with PLC control and free programmable feed.",
    sections: [
      {
        heading: "Easy adjustments",
        body: "The BSM-210 is controlled by a PLC that enables quick, accurate adjustments and free programmable feed. Setting depth is individually adjusted for each side of the blade using two adjustment knobs. The blade is fed by a servo-driven feeder finger that never touches the tooth tip or gullet and lifts on the return stroke. A single-sided clamping jaw maximises setting speed, and the machine can be equipped with different coilers depending on blade size.",
      },
      {
        heading: "Visibility is a quality factor",
        body: "The machine is designed for quick, simple setup. The open arrangement of clamping jaws and setting tools gives the operator a clear view of the teeth and tools. The setting unit is built for rigidity, with all moving parts kept compact to minimise bending moment and ensure stable adjustments.",
      },
    ],
    keySpecs: [
      { label: "Control", value: "PLC" },
      { label: "Clamping", value: "Single-sided jaw" },
      { label: "Feed", value: "Servo-driven finger" },
    ],
    images: ["/images/products/BSM-220.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=bsm-210",
  },
  {
    name: "BSM-220",
    machineType: "Band Saw Blade Setting Machine",
    slug: "bsm-220",
    category: "setting",
    shortDescription:
      "A high-speed automatic band saw blade setting machine built for high-volume production, with PLC control and free programmable feed.",
    sections: [
      {
        heading: "Easy adjustments",
        body: "The BSM-220 is controlled by a PLC that enables quick, accurate adjustments and free programmable feed. Setting depth is individually adjusted for each side of the blade using two adjustment knobs. The blade is fed by a servo-driven feeder finger that never touches the tooth tip or gullet and lifts on the return stroke. A single-sided clamping jaw maximises setting speed, and the machine can be equipped with different coilers depending on blade size.",
      },
      {
        heading: "Visibility is a quality factor",
        body: "The machine is designed for quick, simple setup. The open arrangement of clamping jaws and setting tools gives the operator a clear view of the teeth and tools. The setting unit is built for rigidity, with all moving parts kept compact to minimise bending moment and ensure stable adjustments.",
      },
    ],
    images: ["/images/products/BSM-220.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=bsm-220",
    videoUrl: "https://www.youtube.com/watch?v=tr2guL2ZTmI",
  },
  {
    name: "BSM-250 E-Line",
    machineType: "Band Saw Blade Setting Machine",
    slug: "bsm-250e",
    category: "setting",
    shortDescription:
      "Part of the E-Line range — an automatic band saw blade setter combining top performance with an attractive price for small and medium-size production.",
    sections: [
      {
        heading: "Built for the demanding entrepreneur",
        body: "The BSM-250E is our automatic setter for band saw blades and part of the E-Line range. All E-Line machines are designed to suit the demanding entrepreneur, combining top-quality performance with an attractive price — the perfect choice for small and medium-size production.",
      },
      {
        heading: "Easy adjustments",
        body: "The BSM-250E is controlled by a PLC. Setting depth is individually adjustable during operation for each side of the blade using two adjustment knobs. The blade is fed by a feeder finger that never touches the tooth tip or gullet and lifts on the return stroke. A single-sided clamping jaw maximises setting speed, and the machine can be equipped with different coilers depending on blade size.",
      },
      {
        heading: "Visibility is a quality factor",
        body: "The open arrangement gives the operator a clear view of the teeth and tools for quick, simple setup. The setting unit is built for rigidity, with all moving parts kept compact to minimise bending moment and ensure stable adjustments.",
      },
    ],
    images: ["/images/products/BSM-250E.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=bsm-250e",
  },
  {
    name: "SSM-120",
    machineType: "Automatic Saw Blade Setting Machine",
    slug: "ssm-120",
    category: "setting",
    shortDescription:
      "Sets hand-saw blades automatically at up to 6 blades per minute, running unattended for up to an hour from a loaded input magazine.",
    sections: [
      {
        heading: "Load and leave",
        body: "Driven by the latest servo technology and controlled by a modern PLC, the SSM-120 sets hand-saw blades automatically at a capacity of up to 6 blades per minute. Load the input magazine and the machine runs unattended for up to an hour — empty and reload, and you have plenty of time for other tasks. This makes it an exceptional value for shops large and small.",
      },
      {
        heading: "The comfort of control",
        body: "The HMI features simple conversational recipe programming with monitoring, diagnostics and a service wizard. Setting depth is individually adjusted for each side of the blade using push-buttons on the control panel (optional). A very sturdy design ensures rigidity and stable adjustments.",
      },
    ],
    keySpecs: [
      { label: "Capacity", value: "Up to 6 blades/min" },
      { label: "Unattended run", value: "Up to 1 hour" },
      { label: "Control", value: "Servo + PLC" },
    ],
    images: ["/images/products/SSM-120.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=ssm-120",
  },
  // —— HARDENING ——
  {
    name: "BHM-220E E-Line",
    machineType: "Band Saw Blade Hardening Machine",
    slug: "bhm-220e",
    category: "hardening",
    shortDescription:
      "Automatically hardens the teeth of band saw blades using induction hardening, with PLC control for consistent, repeatable results.",
    sections: [
      {
        heading: "Easy adjustments",
        body: "The BHM-220 is controlled by a PLC that enables quick, accurate adjustments. The blade is fed through the hardening inductor by four pairs of hardened steel wheels, and blade height is adjusted with an adjustment wheel. The machine can be equipped with different coilers, and the HMI features simple conversational recipe programming.",
      },
      {
        heading: "Ease of use",
        body: "The machine is designed for quick, simple setup. Its open arrangement gives the operator a clear view of the process, and the mechanism is built on a rigid steel table for stable adjustments.",
      },
    ],
    images: ["/images/products/BHM-220E.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=bhm-220e",
  },
  {
    name: "SHM-110",
    machineType: "Bow Saw Blade Hardening Machine",
    slug: "shm-110",
    category: "hardening",
    shortDescription:
      "Automatically hardens the teeth of bow saw blades, and can be integrated into existing production lines.",
    sections: [
      {
        heading: "Easy adjustments",
        body: "The SHM-110 is controlled by a PLC that enables quick, accurate adjustments. The blade is fed through the hardening inductor by four pairs of hardened steel wheels, and blade height is adjusted with an adjustment wheel. It can be equipped with different coilers or integrated into existing production lines, and the HMI features simple conversational recipe programming with monitoring, diagnostics and a service wizard.",
      },
      {
        heading: "Seeing is believing",
        body: "The machine is designed for quick, simple setup. Its open arrangement gives the operator a clear view of the process, and the mechanism is built on a very rigid steel table for stable adjustments.",
      },
    ],
    images: ["/images/products/SHM-110.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=shm-110",
  },
  // —— GRINDING ——
  {
    name: "SGM-310",
    machineType: "Saw Blade Grinding Machine",
    slug: "sgm-310",
    category: "grinding",
    shortDescription:
      "From blank to finished blade in one machine — grinds straight or curved blades with straight, universal or three-phase (Japanese) toothing.",
    sections: [
      {
        heading: "From blank to blade in one machine",
        body: "The SGM-310 manufactures straight or curved blades with straight, universal or three-phase (Japanese) toothing. It grinds the teeth and delivers a finished blade. The tooth cutting angle can be 0–45 degrees. Driven by the latest servo technology and controlled by a modern PLC, it produces saw blades automatically at a capacity of 2–3 blades per minute.",
      },
      {
        heading: "Integrated flexibility with full control",
        body: "The SGM-310 offers a unique combination of low cost per blade, high output and a high degree of flexibility. The HMI features simple conversational recipe programming with monitoring, diagnostics and a service wizard. The control panel offers easy adjustments, free programmable feed, quick recipe recall and an automatic self-compensating dressing system. Setup between blades with the same tooth type takes 3–5 minutes, and between tooth types 10–15 minutes.",
      },
    ],
    keySpecs: [
      { label: "Tooth cutting angle", value: "0–45°" },
      { label: "Capacity", value: "2–3 blades/min" },
      { label: "Control", value: "Servo + PLC" },
    ],
    images: ["/images/products/SGM-310.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=sgm-310",
    videoUrl: "https://www.youtube.com/watch?v=uircQU5XU2g",
  },
  // —— DRESSING ——
  {
    name: "DDW-100",
    machineType: "Diamond Dress Wheel",
    slug: "ddw-100",
    category: "dressing",
    shortDescription:
      "A highly accurate, cost-effective dressing system for most ceramic grinding machines and tooth types, custom-made from a profile drawing or a physical blade sample.",
    sections: [
      {
        heading: "Grinding at a glance",
        body: "The DDW-100 dressing wheels are custom made to the highest standards to ensure a state-of-the-art grinding result. The dressing wheel is normally made from a profile drawing, but it can also be made from a physical saw blade sample. The sample is measured in a digital measuring machine; once digitalised, the blade can be adjusted and modified as desired.",
      },
      {
        heading: "Exclusive tooth designs",
        body: "Deventech can also develop and design exclusive tooth designs based on customer demands. We deliver tooth designs with straight, universal or three-phase (Japanese) toothing. Let us design and enhance your tooth designs for maximum quality and performance.",
      },
    ],
    images: ["/images/products/DDW-100.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=ddw-100",
  },
  // —— CUTTING ——
  {
    name: "BCM-310 E-Line",
    machineType: "Band Saw Cut to Length Machine",
    slug: "bcm-310",
    category: "cutting",
    shortDescription:
      "Cuts band saw blades and band knives to length to the highest standards, with a PLC-controlled feed and a powerful pneumatic shear.",
    sections: [
      {
        heading: "Easy adjustments",
        body: "The BCM-310 is controlled by a PLC that enables quick setup and accurate adjustments — changing a parameter is easy with the clear touch-screen panel. The blade is fed by a PLC-controlled feeder wheel with band-slipping control, and the machine is equipped with a powerful pneumatic shear with cutters of high-quality steel.",
      },
      {
        heading: "Flexible output",
        body: "The BCM-310 can be equipped with different coilers and output systems depending on blade size and customer requirements. Its rigid, compact design ensures stable adjustments.",
      },
    ],
    images: ["/images/products/BCM-310E.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=bcm-310-e-line",
  },
  // —— COILING & SERVICE ——
  {
    name: "BCU-100 Series",
    machineType: "Band Coiling Unit",
    slug: "bcu-100",
    category: "coiling",
    shortDescription:
      "Modular coiler solutions for band and bow saw blades — from simple undriven coilers to advanced synchronised, PLC-controlled coiling.",
    sections: [
      {
        heading: "A solution for every application",
        body: "The BCU-100 Series coils band and bow saw blades safely and reliably, ranging from simple undriven coilers to advanced synchronised, PLC-controlled coiling. All units are available in coiling and decoiling versions, with or without tension controller. Thanks to the modular design they can be fitted with a wide range of optional accessories for many applications.",
      },
      {
        heading: "Built for stability",
        body: "Coiling can be done clockwise or counter-clockwise, from the inside or the outside of the coil. The height and tilt angle of the coiler disc are adjustable, and the disc is held by a rigid hub with double spherical roller thrust bearings for maximum stability and life. Maximum load is 160 kg for the light-load series and 300 kg for the medium-load series; higher-capacity coilers are available on request.",
      },
    ],
    keySpecs: [
      { label: "Max load (light)", value: "160 kg" },
      { label: "Max load (medium)", value: "300 kg" },
      { label: "Coiling", value: "CW / CCW, in or out" },
    ],
    images: ["/images/products/BCU-1x0.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=bcu-100",
  },
  {
    name: "BSU-100 Series",
    machineType: "Band Service Unit",
    slug: "bsu-100",
    category: "coiling",
    shortDescription:
      "A modular platform for processing band saw blades — coil to coil with straightening, shearing, measuring or welding integrated in between.",
    sections: [
      {
        heading: "A multi-purpose machine",
        body: "The BSU-100 Series coils band saw blades from coiler to coiler with one or more processes in between — straightening, shearing, measuring and welding units can all be integrated in the platform, or delivered as free-standing units. All band coils are covered safely during the coiling process, and the range spans from simple undriven coilers to advanced synchronised, PLC-controlled solutions.",
      },
      {
        heading: "Built for stability",
        body: "Coiling can be done clockwise or counter-clockwise on both coilers, and the guides on the band track are easily adjusted to the optimal height. The coiler disc is held by a rigid hub with double spherical roller thrust bearings for maximum stability and life. Maximum load is 300 kg for the medium-load series; higher-capacity coilers can be offered on request.",
      },
    ],
    keySpecs: [
      { label: "Max load (medium)", value: "300 kg" },
      {
        label: "Integrable processes",
        value: "Straighten · shear · measure · weld",
      },
    ],
    images: ["/images/products/BSU-100.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=bsu-100",
  },
  {
    name: "BCC-100",
    machineType: "Band Coiling Centre",
    slug: "bcc-100",
    category: "coiling",
    shortDescription:
      "A light, ergonomic coiling centre for use with the Deventech coiler program or most third-party coilers, with a single-handle expanding function.",
    sections: [
      {
        heading: "Easy handling",
        body: "The BCC-100 is designed to be easy and safe to handle — its light weight and ergonomic design make it convenient to work with, and a few simple steps get it ready: place the band end in the securing device, expand the centre, and start the coiling process. One adjustment handle controls the expanding function, and the centre always expands symmetrically to ensure a circular periphery.",
      },
      {
        heading: "Made to fit your bands",
        body: "Built with durability in mind, the BCC-100 can be delivered in different dimensions to suit different band types and sizes. It is developed for use with the Deventech coiler program and can also be adapted for most third-party coilers.",
      },
    ],
    images: ["/images/products/BCC-100.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=bcc-100",
  },
  {
    name: "BCC-200",
    machineType: "Band Coiling Centre",
    slug: "bcc-200",
    category: "coiling",
    shortDescription:
      "A light, ergonomic coiling centre with separate clamp and expanding controls, for use with the Deventech coiler program or most third-party coilers.",
    sections: [
      {
        heading: "Easy handling",
        body: "The BCC-200 is designed to be easy and safe to handle — its light weight and ergonomic design make it convenient to work with, and a few simple steps get it ready: place the band end in the securing device, expand the centre, and start the coiling process. Two adjustment handles control the clamp and expanding functions, and the centre always expands symmetrically to ensure a circular periphery.",
      },
      {
        heading: "Made to fit your bands",
        body: "Built with durability in mind, the BCC-200 can be delivered in different dimensions to suit different band types and sizes. It is developed for use with the Deventech coiler program and can also be adapted for most third-party coilers.",
      },
    ],
    images: ["/images/products/BCC-200.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=bcc-200",
  },
  // —— GAUGES ——
  {
    name: "HSG Series",
    machineType: "Hand Setting Gauges",
    slug: "hsg-series",
    category: "gauges",
    shortDescription:
      "Hand setting gauges for quick, accurate control of setting depth — available in four models from basic metric to high-accuracy with tolerance judgement.",
    sections: [
      {
        heading: "For quick, accurate adjustment",
        body: "The HSG range is built for easy control of setting depth. It makes adjusting a setting machine simple and convenient: read a quick, accurate value of the setting depth, make the necessary adjustments and verify the result. If your setting machine has an automatic measuring system you always have control over setting depth; for machines without one, regular checks with the HSG help you avoid production stops and interruptions. The durable design ensures reliable adjustments, making it an exceptional value for shops large and small.",
      },
    ],
    keySpecs: [
      { label: "HSG-110", value: "Metric" },
      { label: "HSG-120", value: "Metric + imperial" },
      { label: "HSG-130", value: "Tolerance judgement" },
      { label: "HSG-140", value: "High accuracy" },
    ],
    images: ["/images/products/HSG-1x0.png"],
    pdfUrl: "http://www.deventech.se/downloads.php?mid=hsg-110",
  },
];
