<script setup lang="ts">
import {AdminProfileDropdown} from '#components';
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="index.html" class="logo logo-dark">
            <span class="logo-sm">
              <img src="/backend/assets/images/logo-sm.svg" alt="" height="24" />
            </span>
            <span class="logo-lg">
              <img src="/backend/assets/images/logo-sm.svg" alt="" height="24" />
              <span class="logo-txt">Minia</span>
            </span>
          </a>
          <a href="index.html" class="logo logo-light">
            <span class="logo-sm">
              <img src="/backend/assets/images/logo-sm.svg" alt="" height="24" />
            </span>
            <span class="logo-lg">
              <img src="/backend/assets/images/logo-sm.svg" alt="" height="24" />
              <span class="logo-txt">Minia</span>
            </span>
          </a>
        </div>
        <button
          type="button"
          class="btn btn-sm px-3 font-size-16 header-item"
          id="vertical-menu-btn">
          <i class="fa fa-fw fa-bars"></i>
        </button>
        <!-- App Search-->
        <form class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="Search..." />
            <button class="btn btn-primary" type="button">
              <i class="bx bx-search-alt align-middle"></i>
            </button>
          </div>
        </form>
      </div>
      <div class="d-flex">
        <div class="dropdown d-inline-block d-lg-none ms-2">
          <button
            type="button"
            class="btn header-item"
            id="page-header-search-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <i data-feather="search" class="icon-lg"></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
            aria-labelledby="page-header-search-dropdown">
            <form class="p-3">
              <div class="form-group m-0">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search ..."
                    aria-label="Search Result" />
                  <button class="btn btn-primary" type="submit">
                    <i class="mdi mdi-magnify"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="dropdown d-none d-sm-inline-block">
          <button
            type="button"
            class="btn header-item"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <img
              id="header-lang-img"
              src="/backend/assets/images/flags/us.jpg"
              alt="Header Language"
              height="16" />
          </button>
        </div>
        <div class="dropdown d-none d-sm-inline-block">
          <button type="button" class="btn header-item" id="mode-setting-btn">
            <i data-feather="moon" class="icon-lg layout-mode-dark"></i>
            <i data-feather="sun" class="icon-lg layout-mode-light"></i>
          </button>
        </div>
        <div class="dropdown d-none d-lg-inline-block ms-1">
          <button
            type="button"
            class="btn header-item"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <i data-feather="grid" class="icon-lg"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            <div class="p-2">
              <div class="row g-0">
                <div class="col">
                  <a class="dropdown-icon-item" href="#">
                    <img src="/backend/assets/images/brands/github.png" alt="Github" />
                    <span>GitHub</span>
                  </a>
                </div>
                <div class="col">
                  <a class="dropdown-icon-item" href="#">
                    <img src="/backend/assets/images/brands/bitbucket.png" alt="bitbucket" />
                    <span>Bitbucket</span>
                  </a>
                </div>
                <div class="col">
                  <a class="dropdown-icon-item" href="#">
                    <img src="/backend/assets/images/brands/dribbble.png" alt="dribbble" />
                    <span>Dribbble</span>
                  </a>
                </div>
              </div>
              <div class="row g-0">
                <div class="col">
                  <a class="dropdown-icon-item" href="#">
                    <img src="/backend/assets/images/brands/dropbox.png" alt="dropbox" />
                    <span>Dropbox</span>
                  </a>
                </div>
                <div class="col">
                  <a class="dropdown-icon-item" href="#">
                    <img src="/backend/assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                    <span>Mail Chimp</span>
                  </a>
                </div>
                <div class="col">
                  <a class="dropdown-icon-item" href="#">
                    <img src="/backend/assets/images/brands/slack.png" alt="slack" />
                    <span>Slack</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon position-relative"
            id="page-header-notifications-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <i data-feather="bell" class="icon-lg"></i>
            <span class="badge bg-danger rounded-pill">5</span>
          </button>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
            aria-labelledby="page-header-notifications-dropdown">
            <div class="p-3">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="m-0">Notifications</h6>
                </div>
                <div class="col-auto">
                  <a href="#!" class="small text-reset text-decoration-underline">Unread (3)</a>
                </div>
              </div>
            </div>
            <div data-simplebar style="max-height: 230px">
              <a href="#!" class="text-reset notification-item">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <img
                      src="/backend/assets/images/users/avatar-3.jpg"
                      class="rounded-circle avatar-sm"
                      alt="user-pic" />
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">James Lemire</h6>
                    <div class="font-size-13 text-muted">
                      <p class="mb-1">It will seem like simplified English.</p>
                      <p class="mb-0">
                        <i class="mdi mdi-clock-outline"></i>
                        <span>1 hour ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" class="text-reset notification-item">
                <div class="d-flex">
                  <div class="flex-shrink-0 avatar-sm me-3">
                    <span class="avatar-title bg-primary rounded-circle font-size-16">
                      <i class="bx bx-cart"></i>
                    </span>
                  </div>
                </div>
              </a>
              <a href="#!" class="text-reset notification-item">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <img
                      src="/backend/assets/images/users/avatar-6.jpg"
                      class="rounded-circle avatar-sm"
                      alt="user-pic" />
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Salena Layfield</h6>
                    <div class="font-size-13 text-muted">
                      <p class="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                      <p class="mb-0">
                        <i class="mdi mdi-clock-outline"></i>
                        <span>1 hour ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item right-bar-toggle me-2">
            <i data-feather="settings" class="icon-lg"></i>
          </button>
        </div>
        <AdminProfileDropdown />
      </div>
    </div>
  </header>
</template>
