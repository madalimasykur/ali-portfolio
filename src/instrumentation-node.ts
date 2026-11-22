import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc'
import { NodeSDK } from '@opentelemetry/sdk-node'

const sdk = new NodeSDK({
  serviceName: process.env.OTEL_SERVICE_NAME ?? 'ali-portfolio',
  traceExporter: new OTLPTraceExporter(),
})

sdk.start()
