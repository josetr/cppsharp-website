<script>
  import GitHubLogo from '../images/github.svg';
  import '../app.scss';
</script>

<nav class="nav">
  <a href="https://github.com/mono/CppSharp">
    <img src={GitHubLogo} width="35" height="35" alt="Git" />
  </a>
</nav>

<main class="main">
  <slot />
</main>

<footer class="footer text-center">Copyright (©) 2022 CppSharp</footer>

<style>
  .nav {
    display: flex;
    justify-content: end;
  }

  .main {
    flex: 1;
  }

  .footer {
    padding: 10px 0;
  }
</style>
