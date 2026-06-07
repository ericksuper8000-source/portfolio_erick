<template>
  <div class="google-wrapper">
    <header class="search-header">
      <div class="header-content">
        <router-link to="/" class="brand-logo">
          <span class="g-blue">E</span><span class="g-red">r</span><span class="g-yellow">i</span><span class="g-blue">c</span><span class="g-green">k</span>
        </router-link>
        
        <div class="search-box-container">
          <div class="search-box">
            <span class="material-symbols-outlined search-icon-left">search</span>
            
            <input 
              type="text" 
              class="search-input"
              value="Erick Pérez — Projects and Repositories" 
              readonly 
            />
            
            <div class="search-icons-group">
              <span class="material-symbols-outlined mic-icon">mic</span>
              <span class="material-symbols-outlined camera-icon">camera_alt</span>
            </div>
          </div>
        </div>

        <div class="user-actions d-none d-md-flex">
          <span class="material-symbols-outlined apps-icon">apps</span>
          <router-link to="/sobre-erick">
            <img src="../assets/ME.jpg" class="avatar" alt="Erick Pérez" />
          </router-link>
        </div>
      </div>

      <nav class="search-tabs">
        <div class="tabs-inner">
          <div class="tab active">All</div>
          <div class="tab">Images</div>
          <div class="tab">Videos</div>
          <div class="tab">Maps</div>
          <div class="tab">More</div>
        </div>
      </nav>
    </header>

    <main class="results-container">
      <div class="content-grid">
        
        <section class="results-list">
          <p class="results-stats">Close to 5 results (0.24 seconds)</p>

          <section class="result-item">
            <div class="result-url">
              <img src="https://www.google.com/s2/favicons?sz=64&domain=fastapi.tiangolo.com" class="favicon" alt="">
              <span class="url-text">erickperez.dev › projects › cloud-native-api</span>
            </div>
            <a href="https://github.com/erickperez" target="_blank" class="result-title">
              Asynchronous FastAPI Service & Multi-Container Cloud Deployment
            </a>
            <p class="result-description">
              Designed and developed a high-performance RESTful API using FastAPI coupled with a relational database layer. Containerized the entire ecosystem utilizing multi-stage Docker builds to reduce image attack surface and resource footprint. Successfully deployed the production-ready container to a cloud environment, ensuring robust routing and data persistence.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url">
              <img src="https://www.google.com/s2/favicons?sz=64&domain=github.com" class="favicon" alt="">
              <span class="url-text">erickperez.dev › projects › automated-cicd-pipeline</span>
            </div>
            <h3 class="result-title">Continuous Integration & Delivery via GitHub Actions Architecture</h3>
            <p class="result-description">
              Engineered a resilient CI/CD pipeline from scratch using GitHub Actions to enforce strict quality gates. The automated workflow triggers on push events to execute comprehensive unit testing suites, enforce formatting guidelines via Black, run static code analysis, and perform automated builds, seamlessly pushing verified artifacts to target environments without manual intervention.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url">
              <img src="https://www.google.com/s2/favicons?sz=64&domain=kubernetes.io" class="favicon" alt="">
              <span class="url-text">erickperez.dev › projects › kubernetes-orchestration</span>
            </div>
            <h3 class="result-title">Microservices Orchestration Using Local Kubernetes Clusters</h3>
            <p class="result-description">
              Scaled containerized applications into high-availability environments by designing custom Kubernetes YAML manifests. Managed pod lifecycles, service routing, configuration maps, and local volume persistence. Orchestrated cluster deployments using Minikube, simulating enterprise-grade zero-downtime rolling updates and self-healing cluster behaviors.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url">
              <img src="https://www.google.com/s2/favicons?sz=64&domain=terraform.io" class="favicon" alt="">
              <span class="url-text">erickperez.dev › projects › infrastructure-as-code</span>
            </div>
            <h3 class="result-title">Cloud Resource Provisioning & Automation via Terraform</h3>
            <p class="result-description">
              Embraced the Infrastructure as Code (IaC) paradigm by automating cloud architectures using Terraform. Authored modular declarative configuration files to provision secure networks, computing instances, and storage buckets. Eliminated configuration drift by managing state files securely, allowing predictable and repeatable infrastructure deployment.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url">
              <img src="https://www.google.com/s2/favicons?sz=64&domain=grafana.com" class="favicon" alt="">
              <span class="url-text">erickperez.dev › projects › full-stack-observability</span>
            </div>
            <h3 class="result-title">Centralized Logging, Metrics & Cloud Monitoring Dashboard</h3>
            <p class="result-description">
              Implemented an enterprise-grade observability layer to guarantee system health and performance tracing. Configured real-time log aggregation and telemetry matrix collections. Integrated visualization tooling like Grafana to design interactive dashboards, allowing proactive bottleneck identification and infrastructure alerting based on live data traffic.
            </p>
          </section>

          <div class="pagination-wrapper">
            <div class="pagination-content">
              <div class="pagination-letters">
                <span class="g-blue">E</span><span class="g-red">r</span><span class="g-yellow">i</span><span class="g-yellow">i</span><span class="g-yellow">i</span><span class="g-yellow">i</span><span class="g-yellow">i</span><span class="g-yellow">i</span><span class="g-red">c</span><span class="g-blue">k</span>
              </div>
              <div class="pagination-numbers">
                <span class="num">1</span><span class="num link">2</span><span class="num link">3</span><span class="num link">4</span><span class="num link">5</span><span class="num link">6</span><span class="num link">7</span><span class="num link">8</span><span class="num link">9</span><span class="num link">10</span>
              </div>
              <span class="next-text">Next</span>
            </div>
          </div>
        </section>

        <aside class="knowledge-card">
          <div class="card-image-header profile-main-img">
            <img src="../assets/ME.jpg" alt="Erick Pérez" class="main-card-img">
          </div>
          <div class="card-body">
            <h2 class="profile-name">Erick Pérez</h2>
            <p class="profile-subtitle">Jr. DevOps Engineer | QA Specialist | Artist</p>
            <div class="divider"></div>
            <p class="desc-text">
              Explore my hands-on repositories focused on building predictable, automated, and observable cloud-native applications. My work covers the practical lifecycle of software delivery—from developing asynchronous APIs to provisioning infrastructure as code and orchestrating local containerized clusters.
            </p>
            <div class="divider"></div>
            <div class="profile-info">
              <p><strong>GitHub:</strong> github.com/erickperez</p>
              <p><strong>GitLab:</strong> gitlab.com/erickperez</p>
              <p><strong>Core Stack:</strong> Python (FastAPI), Terraform, Kubernetes, Docker, GitHub Actions, Grafana, SQL (MySQL/PostgreSQL), NoSQL</p>
            </div>
          </div>
        </aside>

      </div>
    </main>
  </div>
</template>

<style scoped>
.google-wrapper { font-family: 'Roboto', sans-serif; color: #202124; background: white; min-height: 100vh; }

/* HEADER */
.search-header { padding-top: 25px; border-bottom: 1px solid #ebebeb; position: sticky; top: 0; background: white; z-index: 100; }
.header-content { display: flex; align-items: center; padding: 0 5%; gap: 30px; }
.brand-logo { font-size: 30px; font-weight: 500; text-decoration: none; font-family: 'Product Sans', Arial, sans-serif; }
.g-blue { color: #4285f4; } .g-red { color: #ea4335; } .g-yellow { color: #fbbc05; } .g-green { color: #34a853; }

.search-box-container { flex-grow: 1; max-width: 692px; }
.search-box { 
  display: flex; 
  align-items: center; 
  border: 1px solid #dfe1e5; 
  border-radius: 24px; 
  padding: 0 14px 0 18px; 
  height: 44px; 
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.search-icon-left { 
  color: #9aa0a6; 
  font-size: 20px; 
  margin-right: 10px;
}

.search-input { 
  border: none; 
  outline: none; 
  flex-grow: 1; 
  font-size: 16px; 
  background: transparent; 
  color: #202124 !important;
}

.search-icons-group { display: flex; align-items: center; gap: 12px; }
.mic-icon, .camera-icon { font-size: 24px; cursor: pointer; color: #4285f4; }

.user-actions { margin-left: auto; display: flex; align-items: center; gap: 20px; }
.avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }
.apps-icon { color: #5f6368; cursor: pointer; }

.search-tabs { padding: 0 5%; margin-top: 20px; margin-left: 135px; }
.tabs-inner { display: flex; gap: 25px; color: #70757a; font-size: 14px; }
.tab.active { color: #1a73e8; border-bottom: 3px solid #1a73e8; padding-bottom: 12px; }

/* LAYOUT */
.results-container { padding: 30px 5%; }
.content-grid { display: grid; grid-template-columns: 1fr 380px; gap: 60px; max-width: 1250px; }
.results-list { margin-left: 135px; max-width: 652px; }
.results-stats { color: #70757a; font-size: 13px; opacity: 0.8; margin-bottom: 25px; }

/* ITEMS */
.result-item { margin-bottom: 30px; }
.result-url { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #202124; margin-bottom: 4px; }
.favicon { width: 18px; height: 18px; border-radius: 50%; }
.result-title { font-size: 20px; color: #1a0dab; text-decoration: none; display: block; margin: 0 0 4px 0; font-weight: 400; cursor: pointer; }
.result-title:hover { text-decoration: underline; }
.result-description { font-size: 14px; line-height: 1.58; color: #4d5156; }

/* PAGINACIÓN */
.pagination-wrapper { margin: 60px 0; display: flex; justify-content: center; }
.pagination-content { display: inline-block; position: relative; }
.pagination-letters { font-family: 'Product Sans', sans-serif; font-size: 34px; font-weight: bold; display: flex; justify-content: center; margin-bottom: 2px; }
.pagination-letters span { width: 26px; text-align: center; }
.pagination-numbers { display: flex; justify-content: center; font-size: 13px; }
.pagination-numbers .num { width: 26px; text-align: center; }
.num.link { color: #1a73e8; cursor: pointer; }
.next-text { position: absolute; right: -75px; top: 40px; color: #1a73e8; font-size: 13px; cursor: pointer; }

/* KNOWLEDGE CARD */
.knowledge-card { border: 1px solid #dadce0; border-radius: 8px; overflow: hidden; height: fit-content; }
.main-card-img { width: 100%; height: 300px; object-fit: cover; }
.card-body { padding: 20px; }
.profile-name { font-size: 28px; font-weight: 400; margin-bottom: 4px; }
.profile-subtitle { color: #70757a; font-size: 16px; }
.divider { height: 1px; background: #dadce0; margin: 15px 0; }
.profile-info p { font-size: 14px; margin-bottom: 8px; }

@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .results-list, .search-tabs { margin-left: 0; }
}
</style>