import Overview from "../assets/overview.svg";
import Repositories from "../assets/repositories.svg";
import Projects from "../assets/projects.svg";
import Packages from "../assets/packages.svg";
import Stars from "../assets/stars.svg";
import Home from "../assets/home.svg";
import Discussions from "../assets/discussions.svg";
import CodeSpaces from "../assets/codespaces.svg";
import Copilot from "../assets/copilot.svg";
import Issues from "../assets/issues.svg";
import Explore from "../assets/explore.svg";
import Marketplace from "../assets/marketplace.svg";
import Registry from "../assets/registry.svg";
import PullRequest from "../assets/pull-request.svg";
import Profile from "../assets/profile.svg";
import Gists from "../assets/gists.svg"
import Organization from "../assets/organization.svg"
import Enterprises from "../assets/interprices.svg"
import Sponsors from "../assets/sponsors.svg"
import Settings from "../assets/settings.svg"
import Apache from "../assets/apache.svg"
import NuGet from "../assets/nu-get.svg"
import Ruby from "../assets/ruby.svg"
import Npm from "../assets/npm.svg"
import Containers from "../assets/containers.svg"
import Features from "../assets/features.svg"
import Appearance from "../assets/appearance.svg"
import Accessibility from "../assets/accessibility.svg"
import Try from "../assets/try.svg"
import Building from "../assets/building.svg"

export const tabs = [
    {id: 0, url: Overview, title: "Overview", path: "/", haveRepo: false},
    {id: 1, url: Repositories, title: "Repositories", path: "/repositories", haveRepo: true},
    {id: 2, url: Projects, title: "Projects", path: "/projects", haveRepo: false},
    {id: 3, url: Packages, title: "Packages", path: "/packages", haveRepo: false},
    {id: 4, url: Stars, title: "Stars", path: "#", haveRepo: false},
]

export const packages = [
    {
        id: 1,
        icon: Apache,
        name: "Apache Maven",
        description: "A default package manager used for the Java programming language and the Java runtime environment.",
        url: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry"
    },
    {
        id: 2,
        icon: NuGet,
        name: "NuGet",
        description: "A free and open source package manager used for the Microsoft development platforms including .NET.",
        url: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry"
    },
    {
        id: 3,
        icon: Ruby,
        name: "RubyGems",
        description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
        url: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-rubygems-registry"
    },
    {
        id: 4,
        icon: Npm,
        name: "npm",
        description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
        url: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry"
    },

    {
        id: 5,
        icon: Containers,
        name: "Containers",
        description: "A single place for your team to manage Docker images and decide who can see and access your images.",
        url: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"
    },
];

export const navItems = [
    {icon: Home, label: "Home", href: "/"},
    {icon: Issues, label: "Issues", href: "#"},
    {icon: PullRequest, label: "Pull requests", href: "#"},
    {icon: Repositories, label: "Repositories", href: "/repositories"},
    {icon: Projects, label: "Projects", href: "/projects"},
    {icon: Discussions, label: "Discussions", href: "#"},
    {icon: CodeSpaces, label: "Codespaces", href: "#"},
    {icon: Copilot, label: "Copilot", href: "#"},
]

export const exploreItems = [
    {icon: Explore, label: "Explore", href: "#"},
    {icon: Marketplace, label: "Marketplace", href: "#"},
    {icon: Registry, label: "MCP registry", href: "#"},
]

export const rightSide1 = [

    {label: "Profile", icon:Profile,url:"https://github.com/Joardan000"},
    {label: "Repositories", icon: Repositories,url:"https://github.com/Joardan000?tab=repositories"},
    {label: "Stars", icon: Stars,url:"https://github.com/Joardan000?tab=stars"},
    {label: "Gists", icon: Gists,url:"https://gist.github.com/Joardan000"},
    {label: "Organizations", icon: Building,url:"https://github.com/settings/organizations"},
    {label: "Enterprises", icon: Enterprises,url:"https://github.com/settings/enterprises"},
    {label: "Sponsors", icon: Sponsors,url:"https://github.com/sponsors/accounts"},

]

export const rightSide2 = [
    {label: "Settings", icon: Settings,url:"https://github.com/settings/profile"},
    {label: "Copilot settings", icon: Copilot,url:"https://github.com/settings/copilot/features" },
    {label: "Feature preview", icon: Features, badge: Features,url:""},
    {label: "Appearance", icon: Appearance,url:"https://github.com/settings/appearance"},
    {label: "Accessibility", icon: Accessibility,url:"https://github.com/settings/accessibility"},
    {label: "Try Enterprise", icon: Try, badge: Try,url:"https://github.com/account/enterprises/new"}
]