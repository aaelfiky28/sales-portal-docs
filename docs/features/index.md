---
title: Features
---

<script setup>
import { data as featurePages } from '../features.data'
import { withBase } from 'vitepress'
</script>

# Features

Documentation for individual features is generated from pull requests. New `docs/features/*.md` files are picked up automatically and listed below on the next build (no need to edit this page).

## Feature documents

<table v-if="featurePages.length">
  <thead>
    <tr>
      <th>Jira</th>
      <th>Document</th>
      <th>Updated</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="p in featurePages" :key="p.url">
      <td>{{ p.frontmatter.jira_ticket ?? '—' }}</td>
      <td><a :href="withBase(p.url)">{{ p.frontmatter.title ?? p.url }}</a></td>
      <td>{{ p.frontmatter.date ?? '—' }}</td>
    </tr>
  </tbody>
</table>

<p v-else>No feature docs in <code>docs/features/</code> yet.</p>
