import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CategoryIcon from '@mui/icons-material/Category';
import TextsmsIcon from '@mui/icons-material/Textsms';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux'
import ThreePIcon from '@mui/icons-material/ThreeP';
import BackOffice from './BackOffice'
import httpService from '../../services/httpService';

const array = {
  news: [
    {
      id: 1,
      name: 'Lorem Ipsum',
      content: "y. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: 'https://via.placeholder.com/500x500.png',
    },
  ],
  activities: [
    {
      id: 1,
      name: 'Lorem Ipsum',
      content: "y. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: 'https://via.placeholder.com/500x500.png',
    },
  ],
  testimonials: [
    {
      id: 1,
      name: 'Lorem Ipsum',
      content: "y. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: 'https://via.placeholder.com/500x500.png',
    },
  ],
  organizations: [
    {
      id: 1,
      name: 'Lorem Ipsum',
      welcomeText: "y. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: 'https://via.placeholder.com/500x500.png',
    },
  ],
  slides: [
    {
      id: 1,
      text: 'Lorem Ipsum',
      imageUrl: 'https://via.placeholder.com/500x500.png',
    },
  ],
  users: [
    {
      id: 1,
      firstName: 'Lorem Ipsum',
      email: 'test@gmail.com',
      image: 'https://via.placeholder.com/500x500.png',
    },
  ],
  members: [
    {
      id: 1,
      name: 'Lorem Ipsum',
      image: 'https://via.placeholder.com/500x500.png',
    },
  ],

}

const drawerOptions = {
  admin: [
    {
      id: 1,
      text: 'news',
      icon: <NewspaperIcon />,
      route: 'news',
    },
    {
      id: 2,
      text: 'activities',
      icon: <VolunteerActivismIcon />,
      route: 'activities',
    },
    {
      id: 3,
      text: 'categories',
      icon: <CategoryIcon />,
      route: 'categories',
    },
    {
      id: 4,
      text: 'testimonials',
      icon: <TextsmsIcon />,
      route: 'testimonials',
    },
    {
      id: 5,
      text: 'organizations',
      icon: <AccountTreeIcon />,
      route: 'organizations',
    },
    {
      id: 6,
      text: 'slides',
      icon: <InsertDriveFileIcon />,
      route: 'slides',
    },
    {
      id: 7,
      text: 'users',
      icon: <GroupsIcon />,
      route: 'users',
    },
    {
      id: 8,
      text: 'contacts',
      icon: <ThreePIcon />,
      route: 'contacts',
    },
    {
      id: 9,
      text: 'members',
      icon: <PeopleIcon />,
      route: 'members',
    },
    {
      id: 10,
      text: 'edit profile',
      icon: <AccountCircleIcon />,
    },
  ],
  standard: [
    {
      id: 1,
      text: 'edit profile',
      icon: <AccountCircleIcon />,
    },
  ],
}

const cardFields = {
  news: {
    title: 'name',
    content: 'content',
    imageUrl: 'image',
  },
  activities: {
    title: 'name',
    content: 'content',
    imageUrl: 'image',
  },
  testimonials: {
    title: 'name',
    content: 'content',
    imageUrl: 'image',
  },
  organizations: {
    title: 'name',
    content: 'welcomeText',
    imageUrl: 'image',
  },
  slides: {
    title: 'text',
    content: null,
    imageUrl: 'imageUrl',
  },
  users: {
    title: 'firstName',
    content: 'email',
    imageUrl: 'image',
  },
  members: {
    title: 'name',
    content: null,
    imageUrl: 'image',
  },
}

const nestedRoutes = {
  organizations: {
    edit: 'organizations/:id/edit',
  },
  news: {
    create: 'news/create',
    edit: 'news/:id/edit', // Para más adelante, cuando conectemos todas las rutas, debería ser `novedades/${idState}` y habría que mandarle el ID desde la llamada del componente
  },
}

const BackOfficeContainer = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const location = useLocation();
  const user = useSelector((state) => state.auth.userData);

  React.useEffect(() => {
    const verifyAdmin = async () => {
      const data = await httpService('get', 'users')
      if (data.code !== 200) return;
      setIsAdmin(true);
    }
    verifyAdmin()
  }, [user])

  const handleFilterList = (filter) => {
    setActiveSection(filter.text)
    setMobileOpen(false)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (location.pathname !== activeSection) {
      setActiveSection(location.pathname)
    }
  }, [activeSection, location])

  return (
    <BackOffice
      data={array[activeSection]}
      options={isAdmin ? drawerOptions.admin : drawerOptions.standard}
      mobileOpen={mobileOpen}
      activeSection={activeSection}
      handleFilterList={handleFilterList}
      handleDrawerToggle={handleDrawerToggle}
      cardFields={cardFields[activeSection]}
      handleAction={() => {}}
      nestedRoutes={nestedRoutes[activeSection]}
      location={location.pathname}
    />
  )
}

export default BackOfficeContainer
