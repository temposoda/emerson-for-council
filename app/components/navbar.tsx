export const Navbar = () => (
  <div class="rounded-lg shadow drawer drawer-end">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-row drawer-content">
      <div class="w-full navbar justify-end ">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <li>
              <a href="/" class="rounded-btn">
                Home
              </a>
            </li>
            <li>
              <a href="/volunteer" class="rounded-btn">
                Volunteer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="p-4 overflow-y-auto menu w-full bg-base-100">
        <li>
          <a href="/" class="rounded-btn self-end">
            Home
          </a>
        </li>
        <li>
          <a href="/volunteer" class="rounded-btn self-end">
            Volunteer
          </a>
        </li>
      </ul>
    </div>
  </div>
);
