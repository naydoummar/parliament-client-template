/**
 *  Copyright 2020 Adobe. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 */

import React from "react"
import { graphql } from "gatsby"
import DocLayout from "../components/doclayout"
import { OpenAPIBlock } from "@adobe/parliament-ui-components"

const OpenApiTemplate = ({ data, pageContext, location }) => {
  const { parliamentNavigation } = data

  return (
    <DocLayout
      title={pageContext.seo}
      location={location}
      forceMobile={true}
      gitRemote={pageContext.gitRemote}
      currentPage={location.pathname}
      pages={parliamentNavigation.pages}
    >
      <OpenAPIBlock spec={pageContext.spec} />
    </DocLayout>
  )
}

export const query = graphql`
  query OpenApiTemplateQuery {
    parliamentNavigation {
      pages
    }
  }
`

export default OpenApiTemplate
