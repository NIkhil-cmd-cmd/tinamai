const codeLines = `const model = initialize("neurotech");
for (const signal of stream.eeg()) {
  const features = extract(signal);
  const prediction = infer(features);
  if (prediction.risk > 0.82) alert("intervene");
}

export async function build() {
  const response = await fetch("/api/research");
  return response.json();
}

type Session = {
  id: string;
  timestamp: number;
  latencyMs: number;
};

while (pipeline.active) {
  calibrate(sensorArray);
  optimize(model, dataset);
  publish(findings);
}

SELECT * FROM experiments
WHERE cohort = "2026"
ORDER BY score DESC;

interface HardwareSpec {
  batteryHours: number;
  weightGrams: number;
  sampleRateHz: number;
}

if (motion.detected && focus.locked) {
  render(frame);
}

git checkout main
git pull origin main
npm run build
`;

export default function CodeBackdrop() {
  return (
    <div aria-hidden className="code-backdrop">
      <pre className="code-backdrop-track">{codeLines}</pre>
      <pre className="code-backdrop-track">{codeLines}</pre>
    </div>
  );
}
