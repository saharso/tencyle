type VulnerabilityEcternalReferance = {
  type: string;
  url: string;
};

export type VulnerabilitiesGridRow = {
  id: string;
  name: string;
  summary: string;
  details: string;
  modified: Date;
  published: Date;
  severity: string;
  references: VulnerabilityEcternalReferance[];
};

type Range = {
  type: string;
  events: Record<string, string>[];
};

type Affected = {
  package: Record<string, string>;
  ranges: Range[];
  database_specific: Record<string, string>;
};

type Severity = {
  type: string;
  score: string;
};

export type VulnerabilityItemResponseData = {
  id: string;
  summary: string;
  details: string;
  aliases: string[];
  modified: string;
  published: string;
  database_specific: Record<string, unknown>;
  references: VulnerabilityEcternalReferance[];
  affected: Affected[];
  schema_version: string;
  severity: Severity[];
};

export type VulnerabilityItemResponse = {
  vulns: VulnerabilityItemResponseData[];
};
