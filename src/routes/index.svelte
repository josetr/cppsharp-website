<script>
  import KytheraAI from '../images/kythera-ai.png';
  import { base } from '$app/paths';
</script>

<section>
  <div class="land center text-center">
    <h1 style="margin-top: 25px">
      <img src="{base}/logo.svg" width="50" height="50" style="vertical-align: middle" alt="" /> CppSharp
    </h1>

    <p>Stop writing PInvoke methods by hand. Accelerate your development.</p>

    <p style="font-size: 1.2rem">
      CppSharp facilitates the usage of native C/C++ code with the .NET ecosystem.
    </p>

    <div>
      <a href="https://github.com/mono/CppSharp/blob/main/docs/GettingStarted.md">
        <button class="btn primary">Get started</button>
      </a>
      <a href="https://gitter.im/managed-interop">
        <button class="btn">Join our Gitter</button>
      </a>
    </div>
  </div>
</section>
<section>
  <div class="features">
    <div class="features-list">
      <div class="feature">
        <h3>Cross-platform</h3>
        <p>Distributed as a nuget package that supports Windows, Linux, and OS X.</p>
      </div>

      <div class="feature">
        <h3>High-performance</h3>
        <p>Generates high-performance C# code with minimal overhead.</p>
      </div>

      <div class="feature">
        <h3>Multiple backends</h3>
        <p>Supports generating C# code, as well as C++/CLI.</p>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="sponsors">
    <h2>Sponsors</h2>
    <a href="https://www.kythera.ai/">
      <img src={KytheraAI} width="300" height="55" alt="Kythera AI" />
    </a>
  </div>
</section>

<style lang="scss">
  h1 {
    font-size: 3rem;
  }

  .land {
    max-width: 500px;

    p {
      font-size: 1.5rem;
    }
  }

  section {
    margin: 35px 0;
  }

  .features {
    max-width: 800px;
    margin: auto;
  }

  .features-list {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .feature {
      text-align: center;
      max-width: 400px;
      margin: 0 auto;

      p {
        font-size: 1.2rem;
      }

      flex: 1;
    }

    @media only screen and (min-width: 600px) {
      flex-direction: row;

      .feature {
        max-width: 230px;
      }
    }
  }

  .sponsors {
    text-align: center;
  }
</style>
