const Sidebar = (props: any) => {
  const links = [
    {
      name: "Editor",
      url: "/",
      icon: "la la-edit",
    },
    {
      name: "Library",
      url: "/",
      icon: "la la-list",
    },
    {
      name: "Content",
      url: "/",
      icon: "la la-plus",
    },
    {
      name: "Content Feed",
      url: "/",
      icon: "la la-feed",
    },
    {
      name: "Export Collection",
      url: "/",
      icon: "la la-download",
    },
    {
      name: "Upload Collection",
      url: "/",
      icon: "la la-upload",
    },
    {
      name: "Purge Collection",
      url: "/",
      icon: "la la-trash",
    },
  ];
  return (
    <>
      <div className="circa-sidebar">
        <img src="/circa.png" alt="logo" className="circa-logo" />

        <div className="nav-items">
          {links.map((item: any, index: number) => {
            return (
              <a href="/" key={index}>
                <i className={item.icon} />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
