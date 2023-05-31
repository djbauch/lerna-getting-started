import './ClassificationBanner.css'
export { ClassificationBanner } from './ClassificationBanner'
interface ClassificationBannerProps {
  classification?: string
  placement?: 'top' | 'bottom' | 'inner_top' | 'inner_bottom'
  classifiedby?: string
  derivedfrom?: string
  dtd?: string
  declassifyOn?: string
  tag?: boolean
  label?: string
}
export type { ClassificationBannerProps }
//export default ClassificationBanner
