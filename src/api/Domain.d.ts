/**
 * ArcDomain describes all APIs, schemas, policies, and environments in a single domain.
 * Conceptually a domain collects sharable across different objects definitions.
 * For example, a schema defined in a domain can be shared with different API models.
 */
export interface ArcDomain {
  apis?: any[];
  schemas?: any[];
  policies?: any[];
  environments?: any[];
}
