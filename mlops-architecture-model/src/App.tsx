import React from 'react';
import { BookOpen, GitBranch, MonitorDot, Database, Workflow, Boxes, Microscope, Rocket, AlertTriangle, Scale, Users, Github as Git, LineChart } from 'lucide-react';

function Section({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Jukebox Inc MLOps Architecture</h1>
          <p className="text-xl opacity-90">
            Comprehensive MLOps infrastructure design for a modern music platform
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Section title="Data Pipeline & Infrastructure" icon={Database}>
          <Card title="Data Ingestion Architecture">
            <img 
              alt="Data Pipeline Visualization"
              className="w-full rounded-lg mb-4"
            />
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Event-driven streaming using Apache Kafka for real-time data ingestion</li>
              <li>Change Data Capture (CDC) using Debezium for database changes</li>
              <li>Delta Lake for reliable data storage and versioning</li>
              <li>Apache Airflow for orchestration of data pipelines</li>
            </ul>
          </Card>

          <Card title="Data Storage & Orchestration">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Storage Architecture</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Multi-layer data lake using Delta Lake format
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Bronze layer: Raw data ingestion</li>
                      <li>Silver layer: Cleaned and validated data</li>
                      <li>Gold layer: Business-ready aggregates</li>
                    </ul>
                  </li>
                  <li>Partitioning strategy based on:
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Time-based partitioning for event data</li>
                      <li>Geographic partitioning for country-specific data</li>
                      <li>Hybrid partitioning for large tables</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Orchestration</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Apache Airflow DAGs for:
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Daily data quality checks</li>
                      <li>Feature computation pipelines</li>
                      <li>Model retraining workflows</li>
                    </ul>
                  </li>
                  <li>Databricks workflows for:
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Heavy ETL processing</li>
                      <li>Distributed model training</li>
                      <li>Batch inference jobs</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card title="Feature Engineering Patterns">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Credit Risk Assessment</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Payment history aggregations (30/60/90 day windows)</li>
                  <li>Usage pattern features (daily active hours, peak times)</li>
                  <li>Location stability metrics</li>
                  <li>Revenue trend indicators</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Music Recommendations</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Venue-specific play history embeddings</li>
                  <li>Time-of-day preference vectors</li>
                  <li>Genre affinity scores</li>
                  <li>Collaborative filtering matrices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Fraud Detection</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Real-time behavioral fingerprints</li>
                  <li>Geographic anomaly indicators</li>
                  <li>Usage pattern deviation scores</li>
                  <li>Agent performance metrics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">License Optimization</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Song popularity trends</li>
                  <li>Revenue per track metrics</li>
                  <li>Seasonal demand patterns</li>
                  <li>Cross-country popularity indicators</li>
                </ul>
              </div>
            </div>
          </Card>
        </Section>

        <Section title="Model Lifecycle & Operationalization" icon={Workflow}>
          <Card title="Data Discovery & Access">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Data Catalog & Discovery</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Centralized data catalog using Amundsen
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Automated metadata extraction and indexing</li>
                      <li>Data lineage visualization</li>
                      <li>Usage statistics and popularity metrics</li>
                    </ul>
                  </li>
                  <li>Self-service data access portal
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Sample queries and notebooks</li>
                      <li>Documentation and schema information</li>
                      <li>Data quality metrics and SLAs</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card title="Feature Management & Version Control">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Feature Store</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Centralized feature repository using Feast
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Feature versioning and dependency tracking</li>
                      <li>Online and offline feature serving</li>
                      <li>Feature sharing across models</li>
                    </ul>
                  </li>
                  <li>Feature governance process
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Impact analysis for feature changes</li>
                      <li>Automated testing of feature pipelines</li>
                      <li>Feature documentation requirements</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card title="Experiment Tracking & Model Development">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">MLflow Integration</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Experiment management
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Parameter tracking and versioning</li>
                      <li>Metrics logging and visualization</li>
                      <li>Model artifact storage</li>
                    </ul>
                  </li>
                  <li>Model registry
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Model versioning and staging</li>
                      <li>Model lineage tracking</li>
                      <li>A/B test results integration</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card title="Model Deployment & Monitoring">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Deployment Workflow</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Model promotion process
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Automated validation tests</li>
                      <li>Performance benchmarking</li>
                      <li>Approval workflows</li>
                    </ul>
                  </li>
                  <li>Deployment options
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Batch inference pipelines</li>
                      <li>Real-time serving endpoints</li>
                      <li>Edge deployment for jukeboxes</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card title="Performance Monitoring & Feedback">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Monitoring Infrastructure</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Real-time metrics
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Model performance dashboards</li>
                      <li>Data drift detection</li>
                      <li>System health metrics</li>
                    </ul>
                  </li>
                  <li>Automated alerts
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Performance degradation</li>
                      <li>Data quality issues</li>
                      <li>System failures</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card title="Collaboration & Communication">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Team Interaction</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Cross-functional workflows
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Feature request process</li>
                      <li>Model deployment coordination</li>
                      <li>Incident response procedures</li>
                    </ul>
                  </li>
                  <li>Documentation & knowledge sharing
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Model cards and documentation</li>
                      <li>Best practices and guidelines</li>
                      <li>Training materials</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </Section>

        <Section title="ML Applications" icon={Boxes}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Credit Risk Modeling">
              <p className="text-gray-700 mb-3">
                Batch inference system with daily updates, using historical payment data and customer behavior patterns.
              </p>
            </Card>
            <Card title="Music Recommendations">
              <p className="text-gray-700 mb-3">
                Real-time recommendation engine using collaborative filtering and content-based approaches.
              </p>
            </Card>
            <Card title="Fraud Detection">
              <p className="text-gray-700 mb-3">
                Stream processing system for real-time anomaly detection in sales and usage patterns.
              </p>
            </Card>
            <Card title="License Optimization">
              <p className="text-gray-700 mb-3">
                Weekly batch processing for license renewal decisions based on usage analytics.
              </p>
            </Card>
          </div>
        </Section>

        <Section title="Edge Cases & Assumptions" icon={AlertTriangle}>
          <Card title="Known Limitations">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Limited offline capabilities for recommendation engine</li>
              <li>Potential latency in cross-country data synchronization</li>
              <li>Network connectivity challenges in remote areas</li>
            </ul>
          </Card>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-400">
            © 2025 Jukebox Inc. MLOps Architecture Documentation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;