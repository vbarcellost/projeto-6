import { createGlobalStyle, styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const theme = { pink: '#e66767', cream: '#fff8f2', white: '#fff', text: '#e66767' }
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${({ theme }) => theme.cream}; color: ${({ theme }) => theme.text}; font-family: 'Roboto', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
  button, a { font: inherit; } img { display: block; max-width: 100%; }
`
export const Page = styled.div`min-height: 100vh; display: flex; flex-direction: column;`
export const Container = styled.div`width: min(1024px, calc(100% - 32px)); margin: 0 auto;`
export const Header = styled.header`
  height: ${({ $home }) => $home ? '384px' : '186px'}; color: ${({ theme }) => theme.pink}; background-color: #ffebdf;
  background-image: radial-gradient(#f2d5c6 1.2px, transparent 1.2px), linear-gradient(120deg, rgba(255,255,255,.35), transparent); background-size: 10px 10px, 100% 100%;
  @media (max-width: 600px) { height: ${({ $home }) => $home ? '320px' : '150px'}; }
`
export const HeaderContent = styled(Container)`
  height: 120px; display: flex; align-items: center; justify-content: ${({ $center }) => $center ? 'center' : 'space-between'}; font-size: 18px; font-weight: 900;
  @media (max-width: 600px) { height: 100px; font-size: 14px; gap: 12px; strong { text-align: right; } }
`
export const Logo = styled(Link)`
  color: ${({ theme }) => theme.pink}; text-decoration: none; font-size: 38px; font-weight: 900; letter-spacing: -4px; line-height: 1;
  &::before { content: '●'; display: inline-block; font-size: 13px; transform: translate(8px, -18px); } span { letter-spacing: -3px; }
`
export const NavLink = styled(Link)`color: inherit; text-decoration: none;`
export const Hero = styled(Container)`height: 264px; display: grid; place-items: end center; padding-bottom: 40px;`
export const HeroTitle = styled.h1`font-size: 36px; line-height: 1.2; font-weight: 900; text-align: center; @media (max-width: 600px) { font-size: 27px; }`
export const Section = styled.main`flex: 1; padding: 80px 0 120px; @media (max-width: 700px) { padding: 48px 0 72px; }`
export const CardGrid = styled.div`display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px 80px; @media (max-width: 780px) { grid-template-columns: 1fr; gap: 32px; }`
export const Card = styled.article`position: relative; border: 1px solid ${({ theme }) => theme.pink}; background: white; display: flex; flex-direction: column;`
export const CardImage = styled.img`width: 100%; height: 217px; object-fit: cover;`
export const CardTop = styled.div`position: absolute; top: 16px; right: 16px; display: flex; gap: 8px;`
export const Tag = styled.span`background: ${({ theme }) => theme.pink}; color: white; padding: 6px 8px; font-size: 12px; font-weight: 700;`
export const CardBody = styled.div`
  padding: 8px; display: grid; grid-template-columns: 1fr auto; flex: 1; align-items: center;
  h2 { font-size: 18px; line-height: 22px; } p { grid-column: 1 / -1; font-size: 14px; line-height: 22px; margin: 16px 0; color: #555; }
`
export const Rating = styled.strong`font-size: 18px; span { color: #f3a928; font-size: 22px; }`
export const Button = styled.button`
  display: inline-block; width: fit-content; border: 0; padding: 6px 8px; background: ${({ theme }) => theme.pink}; color: white; font-size: 14px; font-weight: 700; text-decoration: none; cursor: pointer; transition: filter .2s, transform .2s;
  &:hover { filter: brightness(.92); transform: translateY(-1px); }
`
export const RestaurantHero = styled.section`height: 280px; position: relative; color: white; background: linear-gradient(rgba(0,0,0,.48), rgba(0,0,0,.48)), url(${({ $image }) => $image}) center/cover;`
export const RestaurantHeroContent = styled(Container)`height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 25px 0 32px; span { font-size: 32px; font-weight: 100; } h1 { font-size: 32px; font-weight: 900; }`
export const MenuGrid = styled.div`display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; @media (max-width: 850px) { grid-template-columns: repeat(2, 1fr); } @media (max-width: 560px) { grid-template-columns: 1fr; }`
export const MenuCard = styled.article`
  background: ${({ theme }) => theme.pink}; color: white; padding: 8px; display: flex; flex-direction: column; min-width: 0;
  h2 { font-size: 16px; margin: 8px 0; } p { font-size: 14px; line-height: 22px; margin-bottom: 8px; flex: 1; }
  ${Button} { width: 100%; text-align: center; background: ${({ theme }) => theme.cream}; color: ${({ theme }) => theme.pink}; }
`
export const MenuImage = styled.img`width: 100%; height: 167px; object-fit: cover;`
export const Footer = styled.footer`
  min-height: 298px; padding: 40px 16px; display: flex; flex-direction: column; align-items: center; background: #ffebdf; text-align: center;
  > p { max-width: 480px; margin-top: 70px; font-size: 10px; line-height: 12px; }
`
export const FooterLogo = styled.div`${Logo} { pointer-events: none; }`
export const Socials = styled.div`display: flex; gap: 8px; margin-top: 32px; span { display: grid; place-items: center; width: 24px; height: 24px; color: white; background: ${({ theme }) => theme.pink}; border-radius: 5px; font-weight: 900; }`
export const ModalOverlay = styled.div`position: fixed; inset: 0; z-index: 10; display: grid; place-items: center; padding: 24px; background: rgba(0,0,0,.8);`
export const Modal = styled.div`
  position: relative; width: min(1024px, 100%); padding: 32px; display: grid; grid-template-columns: 280px 1fr; gap: 24px; background: ${({ theme }) => theme.pink}; color: white;
  > button { position: absolute; top: 8px; right: 12px; border: 0; background: none; color: white; font-size: 28px; cursor: pointer; }
  @media (max-width: 650px) { grid-template-columns: 1fr; padding: 32px 16px 16px; }
`
export const ModalImage = styled.img`width: 280px; height: 280px; object-fit: cover; @media (max-width: 650px) { width: 100%; height: 220px; }`
export const ModalCard = styled.div`h2 { font-size: 18px; margin-bottom: 16px; } p { font-size: 14px; line-height: 22px; margin-bottom: 16px; } ${Button} { background: ${({ theme }) => theme.cream}; color: ${({ theme }) => theme.pink}; }`
