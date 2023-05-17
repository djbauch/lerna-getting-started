import * as React from 'react'
import './ClassificationBanner.css'

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

export const ClassificationBanner: React.FC<ClassificationBannerProps> = ({
  classification,
  placement,
  classifiedby,
  derivedfrom,
  dtd,
  declassifyOn,
  tag = false,
  label = ''
}: ClassificationBannerProps) => {
  if (tag) {
    label = label ? ' ' + label.toUpperCase() : ''
    switch (classification) {
      case 'C':
        return <span className="classification-tag ccolor">C{label}</span>
      case 'CUI':
        return <span className="classification-tag cuicolor">CUI{label}</span>
      case 'S':
        return <span className="classification-tag scolor">S{label}</span>
      case 'TS':
        return <span className="classification-tag tscolor">TS{label}</span>
      case 'SCI':
        return <span className="classification-tag tsscicolor">TS//SCI{label}</span>
      case 'U':
      default:
        return <span className="classification-tag ucolor">U{label}</span>
    }
  }
  if (!placement || placement === 'top' || placement === 'bottom') {
    return (
      <div className={['bannerselection', placement].join(' ')} role="banner">
        {(() => {
          switch (classification) {
            case 'C':
              return (
                <div className="classification-banner ccolor">
                  THIS PAGE CONTAINS DYNAMIC CONTENT -- HIGHEST POSSIBLE CLASSIFICATION IS CONFIDENTIAL
                </div>
              )
            case 'CUI':
              return (
                <div className="classification-banner cuicolor">
                  THIS PAGE CONTAINS DYNAMIC CONTENT -- HIGHEST POSSIBLE CLASSIFICATION IS CONTROLLED (CUI)
                </div>
              )
            case 'S':
              return (
                <div className="classification-banner scolor">
                  THIS PAGE CONTAINS DYNAMIC CONTENT -- HIGHEST POSSIBLE CLASSIFICATION IS SECRET
                </div>
              )
            case 'TS':
              return (
                <div className="classification-banner tscolor">
                  THIS PAGE CONTAINS DYNAMIC CONTENT -- HIGHEST POSSIBLE CLASSIFICATION IS TOP SECRET
                </div>
              )
            case 'SCI':
              return (
                <div className="classification-banner tsscicolor">
                  THIS PAGE CONTAINS DYNAMIC CONTENT -- HIGHEST POSSIBLE CLASSIFICATION IS TOP SECRET//SCI
                </div>
              )
            case 'U':
            default:
              return (
                <div className="classification-banner ucolor">
                  THIS PAGE CONTAINS DYNAMIC CONTENT -- HIGHEST POSSIBLE CLASSIFICATION IS UNCLASSIFIED
                </div>
              )
          }
        })()}
      </div>
    )
  } else if (placement === 'inner_top') {
    return (
      <div className="bannerselection">
        <form>
          {(() => {
            switch (classification) {
              case 'U':
                return <div className="inner-classification inner_ucolor">UNCLASSIFIED</div>
              case 'C':
                return <div className="inner-classification  inner_ccolor">CONFIDENTIAL</div>
              case 'CUI':
                return <div className="inner-classification  inner_cuicolor">CONTROLLED (CUI)</div>
              case 'S':
                return <div className="inner-classification  inner_scolor">SECRET</div>
              case 'TS':
                return <div className="inner-classification  inner_tscolor">TOP SECRET</div>
              case 'SCI':
                return <div className="inner-classification  inner_tsscicolor">TOP SECRET//SCI</div>
              default:
                return <div className="inner-classification  inner_ucolor">UNCLASSIFIED</div>
            }
          })()}
        </form>
      </div>
    )
  } else if (placement === 'inner_bottom') {
    return (
      <div className="bannerselection">
        <form>
          {(() => {
            switch (classification) {
              case 'U':
                return (
                  <div className="inner-ucolor">
                    <div className="inner-authority">
                      <>Classified by:{classifiedby}</>
                      <br />
                      <>
                        Derived from:{derivedfrom}, dtd {dtd}
                      </>
                      <br />
                      <>Declassify on:{declassifyOn}</>
                      <br />
                    </div>
                    <div className="inner-level">UNCLASSIFIED</div>
                  </div>
                )
              case 'C':
                return (
                  <div className="inner-ccolor">
                    <div className="inner-authority">
                      <>Classified by:{classifiedby}</>
                      <br />
                      <>
                        Derived from:{derivedfrom}, dtd {dtd}
                      </>
                      <br />
                      <>Declassify on:{declassifyOn}</>
                      <br />
                    </div>
                    <div className="inner-level">CONFIDENTIAL</div>
                  </div>
                )
              case 'CUI':
                return (
                  <div className="inner-cuicolor">
                    <div className="inner-authority">
                      <>Classified by:{classifiedby}</>
                      <br />
                      <>
                        Derived from:{derivedfrom}, dtd {dtd}
                      </>
                      <br />
                      <>Declassify on:{declassifyOn}</>
                      <br />
                    </div>
                    <div className="inner-level">CONTROLLED (CUI)</div>
                  </div>
                )
              case 'S':
                return (
                  <div className="inner-scolor">
                    <div className="inner-authority">
                      <>Classified by:{classifiedby}</>
                      <br />
                      <>
                        Derived from:{derivedfrom}, dtd {dtd}
                      </>
                      <br />
                      <>Declassify on:{declassifyOn}</>
                      <br />
                    </div>
                    <div className="inner-level">SECRET</div>
                  </div>
                )

              default:
                return (
                  <div className="inner-ucolor">
                    <div className="inner-authority">
                      <>Classified by:Francisco Torres</>
                      <br />
                      <>Derived from: Multiple Sources, dtd 20221207 </>
                      <br />
                      <>Declassify on: 20471207</>
                      <br />
                    </div>
                    <div className="inner-level">UNCLASSIFIED</div>
                  </div>
                )
            }
          })()}
        </form>
      </div>
    )
  } else {
    return <div></div>
  }
}
export default ClassificationBanner
