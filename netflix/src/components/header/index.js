import React,{useState} from "react";
import {Link as ReactRouterLink} from 'react-router-dom';
import{ Background,Frame,Logo,ButtonLink,Feature,Text,FeatureCallout,Link,Group,Picture,Profile,Dropdown,PlayButton,Search,SearchIcon,SearchInput} from './styles/header';

export default function Header({ bg = true, children , ...restProps}){
    return (
        bg ? <Background{...restProps}>{children}</Background> : children
    )
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps}){
    const [searchActive,setSearchActive] = useState(false);
    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput 
                value={searchTerm} 
                onChange={({ target }) => setSearchTerm(target.value)} 
                placeholder="Search films and series" 
                active={searchActive}
            />
        </Search>
    )
}

Header.Feature = function HeaderFeature({ children, ...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Profile = function HeaderProfile({ children, ...restProps}){
    return <Profile {...restProps}>{children}</Profile>
}

Header.Text = function HeaderText({ children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.Picture = function HeaderPicture({ src, ...restProps}){
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Header.FeatureCallout = function HeaderFeatureCallout({ children, ...restProps}){
    return <FeatureCallout {...restProps}>{children}</FeatureCallout>
}

Header.Frame = function HeaderFrame({ children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}

Header.Group = function HeaderGroup({ children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Header.Logo = function HeaderLogo({ to, ...restProps}){
    return(
        <ReactRouterLink to={to}>
            <Logo{...restProps}/>
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}