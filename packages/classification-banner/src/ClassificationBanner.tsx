import * as React from 'react'
import './ClassificationBanner.css'

interface ClassificationBannerProps  {
  classChoice?: string
  placement?: 'top' | 'bottom' | 'inner_top' | 'inner_bottom'
  classifiedby?: string
  derivedfrom?: string
  dtd?: string
  declassifyOn?: string
}

export const ClassificationBanner: React.FC<ClassificationBannerProps> = ({
  classChoice,
  placement,
  classifiedby,
  derivedfrom,
  dtd,
  declassifyOn
}: ClassificationBannerProps) => {
  if (!placement || placement === 'top' || placement === 'bottom') {
    return (
      <div className={['bannerselection', placement].join(' ')} role="banner">

          {(() => {
            switch (classChoice) {
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
            switch (classChoice) {
              case 'U':
                return <div className="classification-banner inner_ucolor">UNCLASSIFIED</div>
              case 'C':
                return <div className="classification-banner inner_ccolor">CONFIDENTIAL</div>
              case 'CUI':
                return <div className="classification-banner inner_cuicolor">CONTROLLED (CUI)</div>
              case 'S':
                return <div className="classification-banner inner_scolor">SECRET</div>
              default:
                return <div className="classification-banner inner_ucolor">UNCLASSIFIED</div>
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
            switch (classChoice) {
              case 'U':
                return (
                  <div className="inner_ucolor">
                    <div className="inner_authority">
                      <>Classified by:{classifiedby}</>
                      <br />
                      <>
                        Derived from:{derivedfrom}, dtd {dtd}
                      </>
                      <br />
                      <>Declassify on:{declassifyOn}</>
                      <br />
                    </div>
                    <div className="inner_level">UNCLASSIFIED</div>
                  </div>
                )
              case 'C':
                return (
                  <div className="inner_ccolor">
                    <div className="inner_authority">
                      <>Classified by:{classifiedby}</>
                      <br />
                      <>
                        Derived from:{derivedfrom}, dtd {dtd}
                      </>
                      <br />
                      <>Declassify on:{declassifyOn}</>
                      <br />
                    </div>
                    <div className="inner_level">CONFIDENTIAL</div>
                  </div>
                )
              case 'CUI':
                return (
                  <div className="inner_cuicolor">
                    <div className="inner_authority">
                      <>Classified by:{classifiedby}</>
                      <br />
                      <>
                        Derived from:{derivedfrom}, dtd {dtd}
                      </>
                      <br />
                      <>Declassify on:{declassifyOn}</>
                      <br />
                    </div>
                    <div className="inner_level">CONTROLLED (CUI)</div>
                  </div>
                )
              case 'S':
                return (
                  <div className="inner_scolor">
                    <div className="inner_authority">
                      <>Classified by:{classifiedby}</>
                      <br />
                      <>
                        Derived from:{derivedfrom}, dtd {dtd}
                      </>
                      <br />
                      <>Declassify on:{declassifyOn}</>
                      <br />
                    </div>
                    <div className="inner_level">SECRET</div>
                  </div>
                )

              default:
                return (
                  <div className="inner_ucolor">
                    <div className="inner_authority">
                      <>Classified by:Francisco Torres</>
                      <br />
                      <>Derived from: Multiple Sources, dtd 20221207 </>
                      <br />
                      <>Declassify on: 20471207</>
                      <br />
                    </div>
                    <div className="inner_level">UNCLASSIFIED</div>
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